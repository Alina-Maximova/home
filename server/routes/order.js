const express = require("express");
const uuid = require("uuid").v4;

const db = require("../db");
const router = express.Router();


router.get("/admin", (req, res) =>{
   
    // console.log(nameCategory);

   let order=db.getData("/order");

        // console.log(products);
        res.send({
            success: true,
            order: order,
            count: order.length
        });
     
});
router.get("/all/:id", (req, res) =>{
    const id = req.params.id;
    let order=db.getData("/order");


   order=order.filter(el=> el.idUser === id);
//    console.log("kkk", problems)
        res.send({
            success: true,
            order: order,
            length: order.length
        });
     
});

router.post("/add", (req, res)=>{

    const{id, password, products, price} = req.body;
    console.log(id, password, products)
    

    if (!id || !password || !products || !price){
        console.log(177)
        res.send({
            success: false
        });
        return;
    }
    let order=db.getData("/order");
    let user=db.getData("/users");
    const currentUser = user.filter(el=> el.id === id)[0];
    if (currentUser.password != password){
        console.log("Пароль не вереный")
        res.send({
            success: false
        });
        return; 
    }
    if (!id || !password || !products){
        console.log(177)
        res.send({
            success: false
        });
        return;
    }
   
    order.push({
        id: uuid(),
        idUser: id,
        FIO : currentUser.surname + " " + currentUser.name +" " + currentUser.patronymic ,
        products, 
        price,
        status: "Новый",
        comment:""
    });

    db.push("/order", order)
  
    res.send({success: true, order});
    console.log()
   
});
router.post("/update/confirm", (req, res) =>{
    // if (req.user?.role !== "admin"){
    //     res.send({
    //         success: false, info: "Access denied"
    //     })
    //     return;
    // }
  
    const {id, status, comment} = req.body;
    let order=db.getData("/order");
    console.log(order)


    order = order.filter((el) => el.id === id)[0];
    console.log(order)

    order.status = "Подтверждено";
    console.log("1", order)

    order=db.getData("/order");
 
    // products= db.products.map((el) => (el.id === id ? problem : el));

    res.send({success: true, order});
});
router.post("/update/cancel", (req, res) =>{
    // if (req.user?.role !== "admin"){
    //     res.send({
    //         success: false, info: "Access denied"
    //     })
    //     return;
    // }
  
    const {id, comment} = req.body;
    let order=db.getData("/order");
    console.log(order)


    order = order.filter((el) => el.id === id)[0];
    console.log(order)

    order.status = "Отменено";
    order.comment = comment
    console.log("1", order)

    order=db.getData("/order");
 
    // products= db.products.map((el) => (el.id === id ? problem : el));

    res.send({success: true, order});
});
router.post("/delete", (req, res) =>{
    const {id} = req.body;
    let order=db.getData("/order");
    const orders = order.filter(el => el.id !== id);
    db.delete("/order")
    db.push("/order", orders)


    
    res.send({success: true});
});

module.exports= router;