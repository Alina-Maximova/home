import React, { Component, useState,useEffect } from 'react';

import { Card,  CardTitle, CardText, CardHeader, CardBody, CardImg, CardGroup, CardDeck, Button} from 'reactstrap'


const CardCate = () =>{
  const [category, setCategory]= useState([]);
 
const fetchData = async ()=>{
    const data = await fetch("http://localhost:8080/category/all");
    const dataJSON = await data.json();
    setCategory( dataJSON.category);

  }
  useEffect(()=>{
    fetchData();
  }, [])
   
  return (
      <div style={{ textAlign:"center"}}>
            {category.map(category => (
     
          <CardGroup  style={{width:"33%", float:"left", padding:"1% 2% 1% 2%"}}>
          <Card style={{display: "inline-block", verticalAlign: "middle",  padding:"4%"}}>
          <CardImg 
                style={{height:"100", margin:"0 0 5% 0"}} 
                src={`/file/${category.img}`}
                />
         
            <CardBody>
            <CardTitle style={{ float:"left"}} ><h4> От {category.price} руб./шт.</h4> </CardTitle>
            <Button style={{ float:"right", background:"#FE9BAD", color:"white",  borderColor:" #FE9BAD" }}  href={`/catalog/${category.name}`}>Товары</Button>
            
            
            </CardBody>
        </Card>
        </CardGroup>
      
        ))}
      
      
    </div>
    


  );
}
export default CardCate