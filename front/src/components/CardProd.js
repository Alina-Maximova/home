import React, { Component, useState,useEffect } from 'react';

import { Card,  CardTitle, CardText, CardHeader, CardBody, CardImg, CardGroup, CardDeck, Button} from 'reactstrap'
import user from "../store/user";
import cart from "../store/cart";


const CardProd = (nameC) =>{
  const [product, setProduct]= useState([]);
  const name = nameC.data;
  // console.log(id)
const fetchData = async ()=>{
    const data = await fetch(`http://localhost:8080/product/all/${name}`);
    const dataJSON = await data.json();
    console.log(dataJSON)
    setProduct(dataJSON.products);

  }
  useEffect(()=>{
    fetchData();
  }, [])

   
  return (
      <div >
            {product.map(product => (
     <div> 
         <CardGroup  style={{ float:"left", padding:"1% 1% 1% 2%"}}>
          <Card style={{display: "inline-block", verticalAlign: "middle",  padding:"2%", height:"50%", width:"50%"}}>
          <CardImg 
                style={{height:"30%", width:"30%", margin:"0 5% 0% 0", float:"left"}} 
                src={`/file/${product.img}`}/>
         
            <CardBody style={{ textAlign:"left" }}>
            <CardTitle> <h1> Название: {product.name} </h1></CardTitle>
            <CardTitle> <h3>Категория: {product.category} </h3></CardTitle>
              <CardTitle> <h5> Описание: {product.description} </h5></CardTitle>
            <CardTitle style={{color:"rgba(255, 21, 21, 0.48)", margin:"2%"}}><h2> Цена: От {product.price} руб./шт.</h2> </CardTitle>
            {user.auth && <Button style={{ float:"right", background:"#FE9BAD", color:"white", bottom:"0",  borderColor:" #FE9BAD" }} onClick={()=>cart.addProduct(product)}>В корзину</Button>}
            
            </CardBody>
        </Card>
        </CardGroup>
      </div>
        ))}
      
      
    </div>
    


  );
}
export default CardProd