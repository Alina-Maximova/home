import React, { Component } from 'react'
import vk from '../img/vc.png'
import insta from '../img/insta.png'
import tel from '../img/tel.png'


export default class Footer extends Component {
    render(){
        return(
        <div  style={{ position: "fixed", left: "0" ,bottom: "0%", right:"0" , background:"#E8E3E0", height:"10%", textAlign:"center"}}>
           <div style={{padding:"2% 13%", float:"left"}}><img  height="30"
                                width="40" src={tel}/>
            +7 930 341 84 61</div>
              <div style={{padding:"2% 13%", float:"left"}}> <a href='https://vk.com/roza5080'><img  height="30"
                                width="40" src={vk}
            /></a></div>
            
             <div style={{padding:"2% 13%", float:"left"}}> <a href='https://www.instagram.com/cvetochnidomik/'><img  height="30"
                                width="40" src={insta}/></a></div>  
            

           
                     
                
            </div>
        )
    }
}