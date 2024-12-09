const express = require("express");
const uuid = require("uuid").v4;
const db = require("../db");


const router = express.Router();

router.post("/signup",(req, res) => {
    const {name, surname, patronymic, login, email, password} = req.body;

    if(!name || !surname || !patronymic || !login || !email || !password){
        res.send({success: false,code:"wrong"});
        return;
    }

    let users=db.getData("/users");
    const currentUser=users.filter(el => el.email === email)[0];
    if (currentUser){
        res.send({success: false,code:"Пользователь с такой почтой уже существует."});
        return;
    }

    users = users.filter(el => el.email !== email);

 

    users.push({
        id:uuid(),
        name, 
        surname, 
        patronymic, 
        login,
         email, 
         password,
        role: "user"
    });

    db.push("/users",users);

    res.send({success:true});

});

router.post("/login", (req, res) =>{
    const { login, email, password} = req.body;

    if (!login   || !password || !email  ){
        if(!email){
        res.send({ success: false, code:"no email"})};
        if(!password){
            res.send({ success: false, code:" no passw"})};
        return;
        if(!login){
            res.send({ success: false, code:"no login"})};
        return;


    }
    let users = db.getData("/users")
    const currentUser = users.filter(el=> el.email === email)[0];

    if (!currentUser || currentUser.password !== password ){
        if (!currentUser){
            res.send({success: false, code: " Такого пользователя нет" });
            return;}
        if (currentUser.password !== password){
            res.send({success: false, code: "Пароль неверен" });
            return;}   

    }

    const sessionId = uuid();
    db.push(`/session/${sessionId}`, currentUser.id);

    res.send({ success: true, token: sessionId, id: currentUser.id, role: currentUser.role});
}
);
module.exports = router;