import React from "react";
import { useState ,useEffect} from "react";
import {Container,Card,CardHeader,CardBody,Row,Col} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from "../../component/header/Header";
import { getUserDetails, isLogin, updateUser } from "../../services/User_Service";
import {toast,ToastContainer}  from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Order.css';
import CartStore from "../../component/cartcomponent/CartStore";
import Footer from "../../component/header/Footer";
import { Link } from "react-router-dom";
import WithRouter from "../../utility/WithRouter";

const Order =(props)=>{
    const [data,setData]=useState({name:"",email:"",password:"",street:"",moblieNumber:"",city:"",pinCode:"",state:"",landMark:""})
    const onChangeHandler =(e)=>{
         const name =e.target.name
         const value =e.target.value
         setData({...data,[name]:value})
    }
   
    const onSubmitHandle =(e)=>{
        e.preventDefault();
        updateUser(data).then((response)=>{
            toast.success("your details update")
            props.navigate("/placeorder")
        }).catch((error)=>{
            toast.error("some thing error")
            console.log(error)
        })
      }
      

  useEffect(()=>{
    getUserDetails().then((response)=>{
      setData(response.data.result);
    }).catch((error)=>{
     console.log(error)
    })
 },[])

    return(
     <>
       <Header />
        <CartStore/>
       <Container className="mt-4 mb-4  container">
         <Row>
            <Col>
            <Card  >
            <CardHeader >
               <h3>  Customer Details </h3>
            </CardHeader>
            <CardBody className="cardbody">

                <Form onSubmit={onSubmitHandle}  className="input">
                    <FormGroup >
                        <Label for="name">Enter Name</Label>
                        <Input  type="text" placeholder="Enter Here" name="name" id="name" onChange={onChangeHandler} value={data.name}/>
                    </FormGroup>
                    <FormGroup >
                        <Label for="email">Enter email</Label>
                        <Input type="email" placeholder="Enter Here" name="email" id="email" onChange={onChangeHandler} value={data.email}/>
                    </FormGroup>
                    <FormGroup >
                        <Label for="password">Enter password</Label>
                        <Input type="password" placeholder="Enter Here" name="password" id="password" onChange={onChangeHandler} value={data.password}/>
                    </FormGroup>
                
                    <FormGroup >
                        <Label for="moblieNumber">Enter Phone Number</Label>
                        <Input type="text" placeholder="Enter Here" name="moblieNumber" id="moblieNumber" onChange={onChangeHandler} value={data.moblieNumber}/> 
                    </FormGroup>
    
                    <FormGroup>
                        <Label for="street">Enter Street</Label>
                        <Input type="text" placeholder="Enter Here" name="street" id="street" onChange={onChangeHandler} value={data.street}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="landMark">Enter landmark</Label>
                        <Input type="text" placeholder="Enter Here" name="landMark" id="landMark" onChange={onChangeHandler} value={data.landMark}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Enter City</Label>
                        <Input type="text" placeholder="Enter Here" name="city" id="city" onChange={onChangeHandler} value={data.city}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="pinCode">Enter PinCode</Label>
                        <Input type="text" placeholder="Enter Here" name="pinCode" id="pinCode" onChange={onChangeHandler} value={data.pinCode}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">Enter State</Label>
                        <Input type="text" placeholder="Enter Here" name="state" id="state" onChange={onChangeHandler} value={data.state}/> 
                    </FormGroup>
                    <Container className="text-center">
                       <Button type="submit" color="dark">Update And Continue</Button>
                        <Button type="reset" color="primary" className="ms-2">Reset</Button>
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
export default WithRouter(Order);