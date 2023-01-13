import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import{Container,Row, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Card,Col} from 'reactstrap';
import Header from "../../component/header/Header";
import { addBookToCart, getAllBook, getCartItemList, getCartList, isLogin } from "../../services/User_Service";
import './CartdItem.css';
import image from '../../Image/p6.jpeg';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import WithRouter from "../../utility/WithRouter";
import Paginations from "../../component/pagination/Paginations";
import Footer from "../../component/header/Footer";
const CardItem =(props)=>{
  const [book ,setBook]=useState([])
  const[search,setSearch]=useState({search:""})
  const[cart ,setCart]=useState([])
  const [listCart,setListCart]=useState({name:"",price:"",author:"",quantity:""})
  const [count ,setCount]=useState(1);
 const [showPerPage,setShowPerPage]=useState(8);
 const[pagination,setPagination]=useState({start:0,end:showPerPage}) 



 
   const onPaginationChange=(start,end)=>{
    setPagination({start:start,end:end})
   }
  const numberOfItem =()=>{
    if(listCart.length==undefined){
       return 0;
    }
    else{
       return listCart.length;
    }
  }
 const onChangeHandler =(e)=>{
   setCount(e.target.value);
 }
 let l=numberOfItem();
 localStorage.setItem("item",l)
  const updateData=()=>{
        setBook(book.filter(e=>e.name===search));
  }  
  const searchHandler =(e)=>{
     e.preventDefault();
      setSearch(e.target.value)
  }
  useEffect(()=>{
     getAllBook().then((response)=>{
       setBook(response.data);
     }).catch((error)=>{
     })
  },[])
 
  const[newRecod,setNewRecod] =useState([])
   const addCartHandler=(value)=>{
     if(isLogin()){
      const newCart =cart
      const cartObject ={name:value.name,price:value.price,author:value.author,quantity:count}
     setCart(cart=>[...cart,cartObject]);
           addBookToCart(cart).then((response)=>{
            toast.success(response.data.message)
           }).catch((error)=>{
            console.log(error)
           })
     }
     else{
      toast.warning("Please Login Account After You Add book to Cart")
     }
    
   }
    console.log("new cart",newRecod)
   useEffect(()=>{
    loadCart()
   },[])
 const loadCart =()=>{
  getCartList().then((response)=>{
    setListCart(response.data)
  }).catch((error)=>{
     console.log(error)
  })
 }
  
 const orderHandle =(e)=>{
  e.preventDefault();
     if(isLogin()){
      props.navigate("/order")
     }
     else{
      toast.warning("please login your account")
     }
 }

 const sortHandler=(e)=>{
      if(e.target.value==='as'){
        const sortlist =[...book].sort((a,b)=>a.price>b.price ? 1:-1)
        console.log("as",sortlist)
        setBook(sortlist)
      }
      if(e.target.value==='ds'){
        const sortlist =[...book].sort((a,b)=>a.price<b.price ? 1:-1)
        console.log("ds",sortlist)
        setBook(sortlist)
      }
 }



    return (
         <>
          <Header method ={searchHandler} second={updateData} />

          <h1 className="heading">BOOK STORE</h1>
          <select onChange={sortHandler}>
            <option >please choice</option>
            <option value="as">low to high</option>
            <option value="ds">high to low</option>
          </select>
 <hr/>
          <Container className="mt-4 content">
            <Row >
                {
                book.length>0 ? book.slice(pagination.start,pagination.end).map((value,index)=>{
                  return(
                    <Col md={3} key={index}>
                    <Card className="card">
                      <CardImg top src={image}alt="Card image cap"  className="CardImg"/>
                       <CardBody>
                       <CardTitle color="black">BookName:{value.name}</CardTitle>
                       <CardSubtitle  >Author:{value.author}</CardSubtitle>
                       <CardSubtitle >Rs:{value.price}</CardSubtitle>
                       <CardText >
                        Quantity : <select onChange={onChangeHandler}>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                           <option value="7">7</option>
                        </select>
                       </CardText>
                        <Button  color="primary" onClick={()=>{
                       addCartHandler(value)
                       }}>Add to Cart</Button>
                        <Button color="info ms-4" onClick={orderHandle }>Order</Button>
                       </CardBody>
                      </Card>
                            </Col>
                  );
                }):"No BOOK AVAIBLE HERE"
                }
                  <ToastContainer/>
            </Row>
            <Paginations showPerPages={showPerPage} onPagination={onPaginationChange} totalPage={book.length}/>
            <Footer/>
          </Container>

         </>
    );
}
export default WithRouter(CardItem);