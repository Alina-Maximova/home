import React, { Component } from 'react'
import 'bootstrap'
import Header from '../components/Header';
import Slider from '../components/Slider';
import { Container } from 'react-bootstrap';
import main1 from '../img/main1.png'
import main2 from '../img/main2.png'
import main3 from '../img/main3.png'
import main4 from '../img/main4.png'
import main5 from '../img/main5.png'
import main6 from '../img/main6.png'
import main7 from '../img/main7.png'
import main8 from '../img/main8.png'
import main9 from '../img/main9.png'
import main10 from '../img/main10.png'
import main11 from '../img/main11.png'
import main12 from '../img/main12.png'
import main13 from '../img/main13.png'
import main14 from '../img/main14.png'
import main15 from '../img/main15.png'

const Home =()=> {
      return(
          <div> 
              <Container style={{ padding:" 0% 0% 20% 0% "}}> 
              <Slider/>
              <div style={{padding:" 0 0 7% 0", float:"right", textAlign:"center"}}>
                <img  style={{padding:"1%"}} src={main1}/>
                <img  style={{padding:"1%"}} src={main2}/>
                <img style={{padding:"1%"}}  src={main3}/>
                <img style={{padding:"1%"}} src={main4}/>
                <img  style={{padding:"1%"}} src={main5}/>
                <img  style={{padding:"1%"}} src={main6}/>
                <img  style={{padding:"1%"}} src={main7}/>
                <img style={{padding:"1%"}} src={main8}/>
                <img style={{padding:"1%"}}  src={main9}/>
                <img  style={{padding:"1%"}}src={main10}/>
                <img  style={{padding:"1%"}} src={main11}/>
                <img  style={{padding:"1%"}} src={main12}/>
                <img  style={{padding:"1%"}} src={main13}/>
                <img  style={{padding:"1%"}} src={main14}/>
                <img style={{padding:"1%"}} src={main15}/>
                </div> 
              </Container> 
             </div> 
      );
}

export default Home