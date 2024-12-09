import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
 import slider from "../img/slider.jpg"

const Slider =()=> {
  

 
    return (
      <Carousel style={{ textAlign:"center" }}>
          <Carousel.Item>
              <img src={slider}/>
          </Carousel.Item>
          <Carousel.Item>
              <img src={slider}/>
          </Carousel.Item>
        
      </Carousel>
    );
  }
export default Slider;