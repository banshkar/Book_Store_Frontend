import React from "react";
import { useState } from "react";
import {Container,Card,CardHeader,CardBody,Row,Col} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from "../../component/header/Header";
import { Register } from "../../services/User_Service";
import {toast,ToastContainer}  from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Footer from "../../component/header/Footer";
const SignUp =()=>{
    const [data,setData]=useState({name:"",email:"",password:"",street:"",moblieNumber:"",city:"",pinCode:"",state:"",landMark:""})
    const onChangeHandler =(e)=>{
         const name =e.target.name
         const value =e.target.value
         setData({...data,[name]:value})
    }
  const onSubmitHandle =(e)=>{
    console.log("submit",data);
    e.preventDefault();
   Register(data).then((response)=>{
        toast.success(response.data.message,{
            position: toast.POSITION.TOP_RIGHT})
        toast.error(response.data)
   })
  }
    return(
     <>
     <Header/>
       <Container className="mt-4 mb-4">
         <Row>
            <Col sm={{size:6,offset:3}}>
            <Card color="dark" outline>
            <CardHeader >
               <h2>  FILL INFO FOR REGISTRATION</h2>
            </CardHeader>
            <CardBody>

                <Form onSubmit={onSubmitHandle}>
                    <FormGroup>
                        <Label for="name">Enter Name</Label>
                        <Input type="text" placeholder="Enter Here" name="name" id="name" onChange={onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Enter email</Label>
                        <Input type="email" placeholder="Enter Here" name="email" id="email" onChange={onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Enter password</Label>
                        <Input type="password" placeholder="Enter Here" name="password" id="password" onChange={onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="moblieNumber">Enter Phone Number</Label>
                        <Input type="text" placeholder="Enter Here" name="moblieNumber" id="moblieNumber" onChange={onChangeHandler}/> 
                    </FormGroup>
    
                    <FormGroup>
                        <Label for="street">Enter Street</Label>
                        <Input type="text" placeholder="Enter Here" name="street" id="street" onChange={onChangeHandler}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="landMark">Enter landmark</Label>
                        <Input type="text" placeholder="Enter Here" name="landMark" id="landMark" onChange={onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Enter City</Label>
                        <Input type="text" placeholder="Enter Here" name="city" id="city" onChange={onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="pinCode">Enter PinCode</Label>
                        <Input type="text" placeholder="Enter Here" name="pinCode" id="pinCode" onChange={onChangeHandler}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">Enter State</Label>
                        <Input type="text" placeholder="Enter Here" name="state" id="state" onChange={onChangeHandler}/> 
                    </FormGroup>
                    <Container className="text-center">
                        <Button type="submit" color="dark">Register</Button>
                        <Button type="reset" color="primary" className="ms-2">Reset</Button>
                    </Container>
                    <Container>
                    <Link to="/login">Login Here</Link>
                   </Container>
                </Form>
            </CardBody>
        </Card>
            </Col>
         </Row>
         <Footer/>
       </Container>
       <ToastContainer />
       </>

    );
}
export default SignUp;