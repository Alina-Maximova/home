import React, {  useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import cart from '../store/cart'
import axios from 'axios';

const OrderButton = () => {
  const [show,setShow] = useState(false)
  const [password,setPassword] = useState('')
  const id = localStorage.getItem('id')
  const fetchOrder = () => {
    let data = JSON.stringify({id, password, products:cart.cart, price: cart.price})
    axios.post(`/order/add`,data,{
      headers:{
        "Content-Type": "application/json",
      }
    }).then(()=>{
      alert('Ваш заказ оформлен')
      cart.addOrder()
      setShow(false)
    }).catch(err=>{
      alert(err.response.data.values.message)
    })
    console.log(data)
  }

  return (
    <>
      <Button onClick={()=>setShow(true)} size="lg" style={{  fontSize: "20px", textAlign:"center" ,  
                    borderRadius:"30px", background:"#FE9BAD",  borderColor:" #FE9BAD"}} className="mt-4 me-5">Заказать</Button>
      <Modal centered show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>Заказ</Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Введите пароль для подтверждения</Form.Label>
              <Form.Control
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                autoFocus
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={fetchOrder} style={{ borderRadius:"30px", background:"rgba(66, 222, 41, 0.53)", color:"black",  borderColor:"rgba(66, 222, 41, 0.53)"}}>Подтвердить</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default observer(OrderButton)