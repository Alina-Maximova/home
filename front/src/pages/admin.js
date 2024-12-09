import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap'
import Header from '../components/Header';
import Slider from '../components/Slider';
import { Container } from 'react-bootstrap';
import AddCat from '../components/addCat';
import { Tab, Tabs } from 'react-bootstrap'; 
import CardCate from '../components/CardCate';
import AddPr from '../components/addPr';
import CardPrAll from '../components/CardPrAll';
import TableOrd from '../components/TadleOr';
// import TableAll from '../components/TadleAl';




const Admin =()=> {

 
      return(
        
          <div>
 
            
              <Container style={{  padding:" 0% 0% 20% 0% "}}> 
             

                                
                              
                <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                >
                <Tab eventKey="home" title="Заказы">
                  <TableOrd/>
                </Tab>
                <Tab eventKey="profile" title="Категории">
                <div style={{ textAlign:"right"}}>  <AddCat/></div>
                <CardCate/>
                </Tab>
                <Tab eventKey="contact" title="Товары" >
                <div style={{ textAlign:"right"}}>  <AddPr/></div>
                <CardPrAll/>
                </Tab>
                </Tabs>
                <div  style={{padding:" 0% 0% 10% 0% ", color:"white"}}>  dfvdfgdtd</div>
                           
              
              </Container> 
             
          
             </div>
             
      );

  
}


export default Admin
