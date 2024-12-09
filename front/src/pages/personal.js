import React from 'react'

import 'bootstrap'

import { Container } from 'react-bootstrap';


import TablePr from '../components/TadlePR';




const Personal =()=> {
 const user = localStorage.getItem('id')
 console.log(user)
 
      return(
        
          <div>
 
        
              <Container style={{  padding:" 0% 0% 20% 0% "}}>
                  
                 <TablePr/>
              
              </Container> 
             
          
             </div>
             
      );

  
}


export default Personal
