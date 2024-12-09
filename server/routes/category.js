const express = require("express");
const uuid = require("uuid").v4;


const db = require("../db");
const router = express.Router();

router.get("/all", (req, res) =>{
    let { limit, offset} = req.query;

    if (limit) limit=+limit; else limit = 20;
    if (offset) offset = +offset; else offset=0;
   let category=db.getData("/category");
        res.send({
            success: true,
            category: category.slice(offset, offset+limit),
            limit, 
            offset,
            count: category.length
        });
     
});
router.post("/add", (req, res)=>{
    // console.log(req.files.img)
    const {name, price, img} = req.body;

    if (!name || !price || !img){
        console.log(177)
        res.send({
            success: false
        });
        return;
    }
    let category=db.getData("/category");
    if(!db.getData(`/files/${img}`)){
        res.send({ success:false});
        return;
    }
    category.push({
        id: uuid(),
        name,
        price,  
        img
    });

    db.push("/category", category)
  
    res.send({success: true, category });
   
});



module.exports= router;