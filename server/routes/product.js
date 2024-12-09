const express = require("express");
const uuid = require("uuid").v4;

const db = require("../db");
const router = express.Router();


router.get("/all/:name", (req, res) =>{
    const nameCategory = req.params.name;
    // console.log(nameCategory);

   let products=db.getData("/product");
//    console.log(products)
    products = products.filter(el=> el.category == nameCategory);
        // console.log(products);
        res.send({
            success: true,
            products: products,
            count: products.length
        });
     
});
router.get("/all", (req, res) =>{
    let { limit, offset} = req.query;

    if (limit) limit=+limit; else limit = 20;
    if (offset) offset = +offset; else offset=0;
   let products=db.getData("/product");
//    console.log("kkk", problems)
        res.send({
            success: true,
            product: products.slice(offset, offset+limit),
            limit, 
            offset,
            count: products.length
        });
     
});

router.post("/add", (req, res)=>{
    const{name, category, price, description, img} = req.body;
    console.log(name, category, price, description, img)
//  const {img} = req.files
    if (!name || !category || !description || !price  || !img){
        console.log(177)
        res.send({
            success: false
        });
        return;
    }
    let products=db.getData("/product");
    if(!db.getData(`/files/${img}`)){
        res.send({ success:false});
        return;
    }
    products.push({
        id: uuid(),
        name,
        category, 
        price, 
        description, 
        img
    });

    db.push("/product", products)
  
    res.send({success: true, products });
   
});

// router.post("/:id/delete", (req, res) =>{
//     // if (req.user?.role !== "admin"){
//     //     res.send({
//     //         success: false, info: "Access denied"
//     //     })
//     //     return;
//     // }
//     const id  = req.params.id;
//     let problems=db.getData("/problems");
    


//     const problem= problems.filter(el => el.id !== id);
//     console.log("kjh",problem)
//     db.delete("/problems")
//     db.push("/problems", problem)


    
//     res.send({success: true});
// });

module.exports= router;