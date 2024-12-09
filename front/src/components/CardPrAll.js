import React, { Component, useState,useEffect } from 'react';

import { Card,  CardTitle, CardText, CardHeader, CardBody, CardImg, CardGroup, CardDeck, Button} from 'reactstrap'


const CardPrAll = () =>{
  const [product, setProduct]= useState([]);
 
const fetchData = async ()=>{
    const data = await fetch("http://localhost:8080/product/all");
    const dataJSON = await data.json();
    
    setProduct(dataJSON.product);

  }
  useEffect(()=>{
    fetchData();
  }, [])
  console.log(product)
   
  return (
      <div style={{ margin:" 0 0 30% 0"}}>
            {product.map(product => (
     <div> 
        <CardGroup  style={{ float:"left", padding:"1% 1% 1% 2%"}}>
          <Card style={{display: "inline-block", verticalAlign: "middle",  padding:"2%", height:"50%", width:"50%"}}>
          <CardImg 
                style={{height:"30%", width:"30%", margin:"0 5% 0% 0", float:"left"}} 
                src={`/file/${product.img}`}/>
         
            <CardBody>
            <CardTitle> <h1> Название: {product.name} </h1></CardTitle>
            <CardTitle > <h3>Категория: {product.category} </h3></CardTitle>
              <CardTitle> <h5> Описание: {product.description} </h5></CardTitle>
            <CardTitle style={{color:"rgba(255, 21, 21, 0.48)", margin:"2%"}}><h2> Цена: От {product.price} руб./шт.</h2> </CardTitle>
         
            
            </CardBody>
        </Card>
        </CardGroup>
     
      </div>
        ))}
      
      
    </div>
    


  );
}
export default CardPrAll