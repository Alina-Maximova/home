import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import {Modal, ModalHeader, ModalBody, ModalFooter, Label, FormFeedback, Form, FormGroup, Button, Input} from 'reactstrap'

import axios from 'axios';
import user from '../store/user'
import role from "../store/role";

const Login = () =>  {


    const [opened, setOpened] = useState();
    const [decision, setDecision] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showError, setShowError] = useState(false);
  const [textError, setTextError] = useState("");


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [loginInvalid, setLoginInvalid]= useState(false);
    const [emailInvalid, setEmailInvalid]= useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    


    const toggle = ()=> setOpened((value)=> !value);
    const onLogin = async ()=>{
     
        setLoginInvalid(false);
        setEmailInvalid(false);
        setPasswordInvalid(false);


        if (!login ||  !password || !email){
           if(!login) setLoginInvalid(true);
           if (!password) setPasswordInvalid(true);
           if (!email) setPasswordInvalid(true);
           alert("Ошибка ввода");
           return;

        };
      
      const body =JSON.stringify({ login, email, password})
        const data = await axios.post(`http://localhost:8080/users/login`, body, {
            headers:{"content-Type": "application/json"}
        })
        .then((response) => {
            console.log(response.data.role, response.data.id)
            user.setAuth(response.data.role, response.data.id);
            console.log(response.data)
            setShowSignIn(false);
            setShowError(false);
            setLogin("");
            setPassword("");
            role.getRole();
            console.log( role.getRole())
          })
        .catch((err) => {
        
            setTextError(err.response);
            setShowError(true);
        });
       console.log(data)

        


    }
    const handleOnChange = (event) =>{
        setLogin(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setPassword(event.target.value)
    }
    const handleOnChange2 = (event) =>{
        setEmail(event.target.value)
    }
    

  

        return (
            <>
           
                    <Button  onClick={toggle}  style={{ margin:"1%", fontSize: "23px", textAlign:"center" ,  
                    borderRadius:"30px", background:"#FE9BAD",  borderColor:" #FE9BAD"}}>
                    Войти
                    </Button>
                    <Modal isOpen={opened} toggle={toggle}>
            <ModalHeader centered show={showSignUp} onHide={() => setShowSignUp(false)}>Авторизация</ModalHeader>
            <ModalBody>
                <Form>
                <FormGroup >
                    <Label>Логин:</Label>
                    <Input
                     type="text" 
                     placeholder="Введите логин"
                     value={login} 
                onChange={(event)=>handleOnChange(event)}
                invalid={loginInvalid}

                       />
                    <FormFeedback>Обязательное поле</FormFeedback>
                    

                </FormGroup>
                <FormGroup >
                    <Label>Почта:</Label>
                    <Input
                     type='email'
                     placeholder="Введите почту"
                     value={email} 
                onChange={(event)=>handleOnChange2(event)}
                invalid={emailInvalid}
                       />
                    <FormFeedback>Обязательное поле</FormFeedback>
                    

                </FormGroup>
                <FormGroup >
                    <Label>Пароль:</Label>
                    <Input
                     type='password'
                     placeholder="Введите пароль"
                     value={password} 
                onChange={(event)=>handleOnChange1(event)}
                invalid={passwordInvalid}
                       />
                    <FormFeedback>Обязательное поле</FormFeedback>
                    

                </FormGroup>

                </Form>
                </ModalBody>
                <ModalFooter>
                <Button style={{ borderRadius:"30px", background:"rgba(255, 21, 21, 0.48)", color:"black",  borderColor:"rgba(255, 21, 21, 0.48)"}}  type="submit" onClick={toggle}>Отмена</Button>
                <Button style={{ borderRadius:"30px", background:"rgba(66, 222, 41, 0.53)", color:"black",  borderColor:"rgba(66, 222, 41, 0.53)"}}  type="submit" onClick={onLogin}>Войти</Button>
                

                </ModalFooter>
                </Modal>
                
        
                 

                    
               
            </>
        )

        }
export default Login




 