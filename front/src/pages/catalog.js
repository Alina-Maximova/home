import React, { Component } from 'react'
import 'bootstrap'
import Header from '../components/Header';
import Slider from '../components/Slider';
import { Container, Breadcrumb } from 'react-bootstrap';
import CardCate from '../components/CardCate';
const Catalog =()=> {
      return(
          <div>
              <Container style={{ padding:" 0% 0% 20% 0% "}}> 
              <Breadcrumb>
              <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
  <Breadcrumb.Item active> Каталог</Breadcrumb.Item>
</Breadcrumb>
              <div style={{textAlign:"center"}}> <CardCate/></div>
              <div  style={{padding:" 0% 0% 1% 0% ", color:"white"}}>  dfvdfgdtd</div>

              </Container> 

             </div>
             
      );

  
}
export default Catalog