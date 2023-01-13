import React  from "react";
import image from '../../Image/p6.jpeg'
import './CartStyle.css';
import { useState,useEffect } from "react";
import { addBookToCart,  getCartList } from "../../services/User_Service";
import { removeItem } from "../../services/User_Service";
import { toast, ToastContainer } from "react-toastify";

const CartStore=()=>{
    const [listCart,setListCart]=useState({name:"",price:"",author:"",quantity:""})
     
    const updateData=(id)=>{
         setListCart(listCart.filter(e=>e.id!=id))
    }
    useEffect(()=>{
        loadCart()
       },[])
     const loadCart =()=>{
      getCartList().then((response)=>{
        setListCart(response.data)
        console.log(response.data)
      }).catch((error)=>{
       console.log(error)
      })
     }

     const  removeItems=(id)=>{
           console.log(id)
            removeItem(id).then((response)=>{
                console.log(response.data)
                updateData(id)
            })
          }
     let len =listCart.length;
     localStorage.setItem("item",len);     
    return (
        <> 
         <div className="container-box">
             <h2>Your Cart item...</h2>
             <hr/>
            {
                listCart.length>0 ?listCart.map((value,index)=>{
                    return (
                        <div className="image-box" key={index}>
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <div className="content">
                            <h3>Name : {value.name}</h3>
                            <p>Author : {value.author}</p>
                            <p>Price :{value.price}</p>
                            <span>Quanitity :{value.quantity}</span>
                            <hr/>
                        </div>
                        <button type="button" class="btn btn-secondary mt-4 mr-4" onClick={()=>{
                            removeItems(value.id)
                        }}>Remove</button>
                    </div>
                

                    );
                }) :"no cart"
            }
           <ToastContainer/>
         </div>
         <hr/>
        </>
    );

}
export default CartStore;