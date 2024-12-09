import React, { Component } from 'react'
import 'bootstrap'
import Header from '../components/Header';
import Slider from '../components/Slider';
import { Container } from 'react-bootstrap';
import vk from '../img/vc.png'
import insta from '../img/insta.png'
import ad from '../img/adress.png'
import { YMaps, Map, Placemark } from 'react-yandex-maps';



const Where =()=> {

  
 
      return(
        
          <div>
 
     
              <Container style={{ padding:" 0% 0% 20% 0% ", textAlign:"center"}}> 
              
           
              <h2>Вы можете нас найти по адресу: г. Иваново, ул. Шевченко, д. 2.</h2>
<h2>Для связи можно использовать телефон: +7 930 341 84 61</h2>
<h2>Или по почте: Marya.ivanova.17@inbox.ru</h2>

<h2>Наши социальные сети:</h2>
 <a href='https://vk.com/roza5080' style={{ padding:"5%"}}><img  height="30"
                                width="40"  src={vk}
            /></a>
            
              <a href='https://www.instagram.com/cvetochnidomik/' style={{ padding:"5%"}}><img  height="30"
                                width="40" src={insta}/></a>
                                <h1> Вы найдете нас здесь))</h1>
                            
<YMaps >
  <Map
width={1300} height={500}
    defaultState={{
      center: [57.000358, 40.930927],
      zoom: 15,
    }}
  >
    <Placemark geometry={[57.000358, 40.930927]} />
  </Map>
</YMaps>



                                
              
              

              
              </Container> 
             
          
             </div>
             
      );

  
}


export default Where