import React, { Component } from 'react'
import 'bootstrap'
import { useParams } from 'react-router-dom';

import Header from '../components/Header';

import { Container, Breadcrumb } from 'react-bootstrap';

import CardProd from '../components/CardProd';




const Cvet =()=> {
  const name = useParams();
  console.log(name.id)


      return(
        
          <div>
 
    
            
              <Container style={{ padding:" 0% 0% 20% 0% "}}> 
              <Breadcrumb>
              <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
  <Breadcrumb.Item href="/catalog">
    Каталог
  </Breadcrumb.Item>
  <Breadcrumb.Item active> {name.id} </Breadcrumb.Item>
</Breadcrumb>
              <div style={{textAlign:"center"}}> <CardProd data = {name.id} /></div>
             
             
              <div  style={{padding:" 0% 0% 1% 0% ", color:"white"}}>  dfvdfgdtd</div>
                                
              
              
              
              
              </Container> 
             
          
             </div>
             
      );

  
}


export default Cvet