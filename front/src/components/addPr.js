import React, { useState, useEffect }  from 'react';
// import { useState } from 'react/cjs/react.development';

import { Alert } from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter, Label, FormFeedback, Form, FormGroup, Button, Input, Dropdown} from 'reactstrap'



const AddPr =  ( idUser) =>  {


    const [opened, setOpened] = useState();
    
    const [name, setName]= useState("");
    const [category, setCategory]= useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription]= useState("");
    const [file, setFile]= useState(null);

   
    const [nameInvalid, setNameInvalid]= useState(false);
    const [categoryInvalid, setCategoryInvalid]= useState(false);
    const [priceInvalid, setPriceInvalid] = useState(false);
    const [descriptionInvalid, setDescriptionInvalid] = useState(false);
    const [fileInvalid, setFileInvalid] = useState(false);
    
    const [error, setError]= useState(null);

    const toggle = ()=> setOpened((value)=> !value);
    const onAdd = async () => {
        setNameInvalid(false);
        setCategoryInvalid(false);
        setPriceInvalid(false);
        setDescriptionInvalid(false);
        setFileInvalid(false);
        setError(null);

        if(!category ||!price || !name || !description || !file){
            if(!category) setCategoryInvalid(true);
            if(!price) setPriceInvalid(true);
            if(!name) setNameInvalid(true);
            if(!description) setDescriptionInvalid(true);
            if(!file) setFileInvalid(true);
            alert("ошибка ввода" );
            return;
        }
       
       
       const formData = new FormData();
       formData.append("file", file);

       const result = await fetch("http://localhost:8080/file/upload",{
           method:"POST",
           body: formData
           
       });
       console.log('1');

       const resultJSON = await result.json();
       const fileId = resultJSON.fileId;
        await fetch("http://localhost:8080/product/add",{
        method:"POST",
        headers:{"content-Type": "application/json"},
        body: JSON.stringify({ name, category, price, description,  img: fileId }),
     
        });
       

        toggle();
        window.location.reload();
    }
    
    
    const handleOnChange = (event) =>{
        setCategory(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setName(event.target.value)
     }
     const handleOnChange2 = (event) =>{
        setDescription(event.target.value)
    }
    const handleOnChange3 = (event) =>{
        setPrice(event.target.value)
    }
    const handleOnChange4 = (event) =>{
        setFile(event.target.files[0])
    }

        return (
            <>
            {error &&(
                <div>
                    <Alert color='danger' toggle={()=> setError(null)}>
                        {error}
                    </Alert>
                    </div>
                    )}
                    <Button  onClick={toggle}   style={{ margin:"1%", fontSize: "23px",  borderColor:" #FE9BAD", textAlign:"right" ,  
                    borderRadius:"30px", background:"#FE9BAD"}}>
                    Добавить товар
                    </Button>
                    <Modal isOpen={opened} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Добавить проблему</ModalHeader>
                    <ModalBody>
                   
                        <Form>

                    <FormGroup>
                            <Label for="classification"> Категория:</Label>
                           
                            <Input  
                            type ="select"
                            placeholder="Выберите категориб цветов"
                            value={category} 
                            onChange={(event)=>handleOnChange(event)}
                            invalid={categoryInvalid}>
                                <option></option>
                       
                            <option>Альстромерия</option>
                            <option>Хризантемы</option>
                            <option>Эустома</option>
                            <option>Гербера</option>
                            <option>Лилии</option>
                            <option>Букет из роз</option>
                            <option>Букеты</option>
                            <option>Букеты из мыльных роз</option>
                            <option>Букет с фруктами</option>
                            <option>Букет из хризантем</option>
                            <option>Орхидеи</option>
                            <option>Розы</option>
                            <option>Сопутствующие товары</option>
                            <option>Игрушки</option>
                            <option>Композиция из живых цветов</option>
                            
                            </Input>
                       
                        </FormGroup>
                        <FormGroup >
                            <Label>Название:</Label>
                            <Input
                             type="text" 
                             placeholder="Введите название"
                             value={name} 
                            onChange={(event)=>handleOnChange1(event)}
                            invalid={nameInvalid}
                               />
                            <FormFeedback>Обязательное поле</FormFeedback>
                            

                        </FormGroup>
                       
                       
                        <FormGroup >
                            <Label for="examplePassword"> Описание товара:</Label>
                            <Input  
                            type="textarea"
                            placeholder="Веведите описание" 
                            value={description} 
                            onChange={(event)=>handleOnChange2(event)}
                            invalid={descriptionInvalid}  />
                        <FormFeedback>Обязательное поле</FormFeedback>

                        </FormGroup>
                        <FormGroup >
                            
                            <Label for="exampleEmail">Цена за единицу товара:</Label>
                            <Input
                            type="text" 
                            placeholder="Введите адрес"
                            value={price} 
                            onChange={(event)=>handleOnChange3(event)}
                            invalid={priceInvalid}
                             />
                            <FormFeedback>Обязательное поле</FormFeedback>

                        </FormGroup>
                       
                        <FormGroup >
                            <Label for="examplePassword">Фото:</Label>
                            <Input  
                            type="file" 
                            placeholder="Загрузите файл"
                           
                            id = "file"
                            onChange={(event)=>handleOnChange4(event)}
                            invalid={fileInvalid}  />
                        <FormFeedback>Обязательное поле</FormFeedback>

                        </FormGroup>
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                        <Button style={{ borderRadius:"30px", background:"rgba(255, 21, 21, 0.48)", color:"black", borderColor:"rgba(255, 21, 21, 0.48)"}}  type="submit" onClick={toggle}>Отмена</Button>
                       <Button style={{ borderRadius:"30px", background:"rgba(66, 222, 41, 0.53)", color:"black", borderColor:"rgba(66, 222, 41, 0.53)"}}  type="submit" onClick={ onAdd}>Добавить</Button>

                        </ModalFooter>
                        </Modal>
                        
                    
                    
                    
                        

                    
               
            </>
        )
}

export default AddPr




 