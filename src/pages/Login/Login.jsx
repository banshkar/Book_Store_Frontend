import React from "react";
import { useState } from "react";
import {Container,Card,CardHeader,CardBody,Row,Col} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Header from "../../component/header/Header";
import { isLogin, LoginPage } from "../../services/User_Service";
import {toast,ToastContainer}from 'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from "react-router-dom";
import WithRouter from "../../utility/WithRouter";
import Footer from "../../component/header/Footer";
const Login =(props)=>{
     const [login ,setLogin]=useState({email:"",password:""})

     const onChandhandler =(e)=>{
        const name= e.target.name
        const value =e.target.value
         setLogin({...login,[name]:value})
     }
     const onSubmitHandle =(e)=>{
        e.preventDefault();
        LoginPage(login).then((response)=>{
             localStorage.setItem("login",true); 
             localStorage.setItem("token",response.data.token)
              props.navigate("/book");
              console.log(response.data)
             toast.success(response.data.message)
        }).catch((error)=>{
            toast.error(error.response.data)
            localStorage.removeItem("login");
            localStorage.removeItem("token");
        })
     }

    return (
      <>
        <Container className="mt-4 mb-4">
        <Row>
           <Col sm={{size:8,offset:3}}>
           <Card color="dark" outline>
           <CardHeader >
              <h2 className="text-center">  LOGIN HERE</h2>
           </CardHeader>
           <CardBody>

               <Form onSubmit={onSubmitHandle}>
                   <FormGroup>
                       <Label for="email">Enter email</Label>
                       <Input type="email" placeholder="Enter Here" name="email" id="email" onChange={onChandhandler}></Input>
                   </FormGroup>
                   <FormGroup>
                       <Label for="password">Enter password</Label>
                       <Input type="password" placeholder="Enter Here" name="password" id="password" onChange={onChandhandler}></Input>
                   </FormGroup>
              
                   <Container className="text-center">
                       <Button type="submit" color="dark">Login</Button>
                       <Button type="reset" color="primary" className="ms-2">Reset</Button>
                   </Container>
                   <Container>
                    <Link to="/signup">Click Here For Register ?</Link>
                   </Container>
               </Form>
           </CardBody>
       </Card>
           </Col>
        </Row>
        <ToastContainer/>
        <Footer/>
      </Container>
      </>
    );
}
export default  WithRouter(Login);