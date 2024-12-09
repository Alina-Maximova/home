import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import {Modal, ModalHeader, ModalBody, ModalFooter, Label, FormFeedback, Form, FormGroup, Button, Input} from 'reactstrap'



const Signup = () =>  {

    const [opened, setOpened] = useState();
    const [decision, setDecision] = useState(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

       
    const [nameInvalid, setNameInvalid]= useState(false);
    const [surnameInvalid, setSurnameInvalid]= useState(false);
    const [patronymicInvalid, setPatronymicInvalid]= useState(false);
    const [loginInvalid, setLoginInvalid]= useState(false);
    const [emailInvalid, setEmailInvalid]= useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    


    const toggle = ()=> setOpened((value)=> !value);
    const onSignup = async ()=>{
        setNameInvalid(false);
        setSurnameInvalid(false);
        setPatronymicInvalid(false);
        setLoginInvalid(false);
        setEmailInvalid(false);
        setPasswordInvalid(false);


        if ( !name || !surname || !patronymic || !login || !email || !password){
           if (!name) setNameInvalid(true);
           if (!surname) setSurnameInvalid(true);
           if (!patronymic) setPatronymicInvalid(true);
           if (!login) setLoginInvalid(true);
           if (!email) setEmailInvalid(true);
           if (!password) setPasswordInvalid(true);
           alert("Ошибка ввода");
           return;

        };
        console.log(name, surname, patronymic, login, email, password)
      
        const data = await fetch("/users/signup",{
            method:"POST",
            headers:{"content-Type": "application/json"},
            body: JSON.stringify({ name, surname, patronymic, login, email, password})
        });
        const dataJSON = await data.json();
        console.log(dataJSON)
         if (dataJSON.success === false){
             alert(dataJSON.code)
         }else{
             setDecision(true)};
             alert("Вы зарегистрировались. Можете войти в систему под своим логином и паролем!");
        
             

        


    }
    const handleOnChange = (event) =>{
        setName(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setSurname(event.target.value)
    }
    const handleOnChange2 = (event) =>{
        setPatronymic(event.target.value)
    }
    
     const handleOnChange3 = (event) =>{
        setPassword(event.target.value)
    }
    const handleOnChange4 = (event) =>{
        setLogin(event.target.value)
    }
    const handleOnChange5 = (event) =>{
         setEmail(event.target.value)
     }

        return (
            <>
           
                    <Button  onClick={toggle}   style={{ margin:"1%", fontSize: "23px", textAlign:"center" ,  
                    borderRadius:"30px", background:"rgba(234, 86, 117, 0.26)", borderColor:"rgba(234, 86, 117, 0.26)"}}>
                    Регистрация
                    </Button>
                    <Modal isOpen={opened} toggle={toggle}>
            <ModalHeader toggle={toggle}>Регистрация</ModalHeader>
            <ModalBody>
                <Form>
                <FormGroup>
                    <Label >Фамилия:</Label>
                    <Input
                    type="text" 
                    placeholder="Введите фамилию" 
                    value={surname} 
                    onChange={(event)=>handleOnChange1(event)}
                    invalid={surnameInvalid}
                     />
                    <FormFeedback>Обязательное поле</FormFeedback>

                </FormGroup>
                <FormGroup >
                    <Label>Имя:</Label>
                    <Input
                     type="text" 
                     placeholder="Введите имя"
                     value={name} 
                     onChange={(event)=>handleOnChange(event)}
                     invalid={nameInvalid}
                       />
                    <FormFeedback>Обязательное поле</FormFeedback>
                    

                </FormGroup>
                
                <FormGroup>
                    <Label >Отчество:</Label>
                    <Input
                    type="text" 
                    placeholder="Введите отчество" 
                    value={patronymic} 
                    onChange={(event)=>handleOnChange2(event)}
                    invalid={patronymicInvalid}
                     />
                    <FormFeedback>Обязательное поле</FormFeedback>

                </FormGroup>
                <FormGroup >
                    <Label>Почта:</Label>
                    <Input
                     type='email'
                     placeholder="Введите почту"
                     value={email} 
                onChange={(event)=>handleOnChange5(event)}
                invalid={emailInvalid}
                       />
                    <FormFeedback>Обязательное поле</FormFeedback>
                    

                </FormGroup>
               
                <FormGroup >
                    <Label>Логин:</Label>
                    <Input
                     type="text" 
                     placeholder="Введите логин"
                     value={login} 
                onChange={(event)=>handleOnChange4(event)}
                invalid={loginInvalid}

                       />
                    <FormFeedback>Обязательное поле</FormFeedback>
                    

                </FormGroup>
                
                <FormGroup >
                    <Label>Пароль:</Label>
                    <Input
                     type="password" 
                     placeholder="Введите пароль"
                     value={password} 
                     onChange={(event)=>handleOnChange3(event)}
                     invalid={passwordInvalid}
                       />
                    <FormFeedback>Обязательное поле</FormFeedback>
                    

                </FormGroup>

              
                </Form>
                </ModalBody>
                <ModalFooter>
                <Button style={{ borderRadius:"30px", background:"rgba(255, 21, 21, 0.48)", color:"black", borderColor:"rgba(255, 21, 21, 0.48)"}}  type="submit" onClick={toggle}>Отмена</Button>
                <Button style={{ borderRadius:"30px", background:"rgba(66, 222, 41, 0.53)", color:"black", borderColor:"rgba(66, 222, 41, 0.53)"}}  type="submit" onClick={ onSignup}>Зарегистрироваться</Button>
                

                </ModalFooter>
                </Modal>
                
        
                 

                    
               
            </>
        )

        }
export default Signup




 