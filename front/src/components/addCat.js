import React, { useState }  from 'react';
// import { useState } from 'react/cjs/react.development';

import { Alert } from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter, Label, FormFeedback, Form, FormGroup, Button, Input} from 'reactstrap'



const AddCat =  ( idUser) =>  {

    const [opened, setOpened] = useState();
    
    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [file, setFile]= useState(null);

   
    const [nameInvalid, setNameInvalid]= useState(false);
    const [priceInvalid, setPriceInvalid]= useState(false);

    const [fileInvalid, setFileInvalid] = useState(false);
    
    const [error, setError]= useState(null);

    const toggle = ()=> setOpened((value)=> !value);
    const id = idUser.data;

    const onAdd = async () => {
        setNameInvalid(false);
        setPriceInvalid(false);
        setFileInvalid(false);
        setError(null);

        if( !name || !price || !file){
            if(!name) setNameInvalid(true);
            if(!price) setPriceInvalid(true);
            if(!file) setFileInvalid(true);
            alert("ошибка ввода" );
            return;
        }
       
     
       const formData = new FormData();
       formData.append("file", file);

 console.log(formData)
       const result = await fetch("http://localhost:8080/file/upload",{
           method:"POST",
           body: formData
           
       });


       const resultJSON = await result.json(); 
             console.log(resultJSON);
       const fileId = resultJSON.fileId;
        await fetch(`http://localhost:8080/category/add`,{
        method:"POST",
        headers:{"content-Type": "application/json"},
        body: JSON.stringify({ name, price,  img: fileId }),
     
        });
       

        toggle();
        window.location.reload();
    }
    
    
    const handleOnChange = (event) =>{
        setName(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setPrice(event.target.value)
     }
   
    const handleOnChange2 = (event) =>{
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
                    Добавить категорию
                    </Button>
                    <Modal isOpen={opened} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Добавить новую категорию</ModalHeader>
                    <ModalBody>
                        <Form>
                        <FormGroup >
                            <Label>Название:</Label>
                            <Input
                             type="text" 
                             placeholder="Введите название"
                             value={name} 
                            onChange={(event)=>handleOnChange(event)}
                            invalid={nameInvalid}
                               />
                            <FormFeedback>Обязательное поле</FormFeedback>
                            

                        </FormGroup>
                        <FormGroup >
                            <Label for="exampleEmail">ЦЕна за единицу товара</Label>
                            <Input
                            type="text" 
                            placeholder="Введите цену"
                            value={price} 
                            onChange={(event)=>handleOnChange1(event)}
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
                            onChange={(event)=>handleOnChange2(event)}
                            invalid={fileInvalid}  />
                        <FormFeedback>Обязательное поле</FormFeedback>

                        </FormGroup>
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                        <Button style={{ borderRadius:"30px", background:"rgba(255, 21, 21, 0.48)", color:"black",  borderColor:"rgba(255, 21, 21, 0.48)"}}  type="submit" onClick={toggle}>Отмена</Button>
                       <Button style={{ borderRadius:"30px", background:"rgba(66, 222, 41, 0.53)", color:"black",  borderColor:"rgba(66, 222, 41, 0.53)"}}  type="submit" onClick={ onAdd}>Добавить</Button>

                        </ModalFooter>
                        </Modal>
                        
                    
                    
                    
                        

                    
               
            </>
        )
}

export default AddCat




 