import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast ,ToastContainer} from 'react-toastify';
import { getCartList, getPrice, getUserDetails, isLogin, order } from '../../services/User_Service';
import WithRouter from '../../utility/WithRouter';
import Header from '../header/Header';
import './OrderPlace.css';
const PlaceOrder = (props) => {
   const [item ,setItem]=useState([]);
   const[totalCost,setTotalCost]=useState([])
   const [data,setData]=useState([])
    useEffect(()=>{
        loadItem();
     
    },[])
    // let value =totalCost;
   const loadItem=()=>{
      getCost();
      getDetais();
     getCartList().then((response)=>{
        setItem(response.data)
        console.log(response.data)

     }).catch((error)=>{
        console.log(error)
     })
   }
 
   const getCost=()=>{
      getPrice().then((response)=>{
        setTotalCost(response.data);
        console.log(response.data)
     }).catch((error)=>{
        console.log(error)
     })
   }
  const getDetais =()=>{
      getUserDetails().then((response)=>{
         setData(response.data.result)
         console.log(response.data)
      }).catch((error)=>{
        console.log(error)
      })
  }
const orderHandler=(e)=>{
    e.preventDefault();
      if(isLogin()){
        order().then((response)=>{
            toast.success(response.data)
            console.log(response.data)
         
         })
      }
      else{
        toast.warning("please Login Account !")
      }

}
  return (
      <>
      <Header/>
       <div className="container">
       <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">authore</th>
      <th scope="col">Price</th>
      <th scope="col">Quanitity</th>
    </tr>
  </thead>
  <tbody>
     {
        item.length>0 ? item.map((value,index)=>{
            return (

                <tr key={index}>
      <td>{value.name}</td>
      <td>{value.author}</td>
      <td>{value.price}</td>
      <td>{value.quantity}</td>
     
    </tr>
            );
        }):"No Item"
     }
  
  </tbody>
</table> 
  <div className="content">
     <h4>Your Amount:</h4>
     <hr/>
     <div><h2>Total Cost: Rs.{totalCost}</h2></div>
  </div>

   <div className="form">
   <form className="row g-3">
  <div className="col-md-4">
    <label  clasName="form-label">Email</label>
    <input type="email" className="form-control" id="email" value={data.email} />
  </div>
  <div className="col-4">
    <label  className="form-label">Street</label>
    <input type="text" className="form-control" id="street"  value={data.street}/>
  </div>
  <div className="col-md-4">
    <label className="form-label">City</label>
    <input type="text" className="form-control" id="City" value={data.city}/>
  </div>
  <div className="col-md-4">
    <label  className="form-label">State</label>
    <input type="text" className="form-control" id="state"  value={data.state}/>
  </div>
  <div className="col-md-2">
    <label className="form-label">pinCode</label>
    <input type="text" className="form-control" id="pinCode" value={data.pinCode}/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" onClick={orderHandler}>OrderPlace</button>
  </div>
</form> 
   </div>
       </div>
  <ToastContainer/>
      </>
  )
}

export default WithRouter(PlaceOrder);