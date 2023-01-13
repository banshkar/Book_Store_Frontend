import { myaxios } from "./Helps";

export const getAllBook=()=>{
    return myaxios.get("/user/admin/getAllBookStore");
}
export const Register=(user)=>{
     console.log("send",user)
    return myaxios.post("/user/register",user)
}
export const LoginPage =(user)=>{
     return myaxios.post("/user/login",user)
}
export const getCartList =()=>{
    let token =localStorage.getItem("token")
    return myaxios.get(`/user/getCartItem/${token}`)
}
export const getUserDetails =()=>{
    let token =localStorage.getItem("token")
    return myaxios.get(`/user/getDetails/${token}`)
}
export const updateUser =(user)=>{
    let token =localStorage.getItem("token")
    return myaxios.put(`/user/update/${token}`,user)
}
export const addBookToCart =(cart)=>{
    console.log(cart)
    let token =localStorage.getItem("token")
    return myaxios.post(`/user/addBookToCart/${token}`,cart)
}

export const isLogout =(token)=>{
    return myaxios.get(`/user/logOut/${token}`)
}
export const removeItem =(id)=>{
    return myaxios.get(`/user/deletedItem/${id}`)
}

export const getPrice =()=>{
    let token =localStorage.getItem("token")
    return myaxios.get(`/user/getPrice/${token}`)
}
export const order =()=>{
    let token =localStorage.getItem("token")
    return myaxios.get(`/user/orderPlace/${token}`)
}

export const isLogin =()=>{
     let token =localStorage.getItem("token")
     console.log(token)
     let found =localStorage.getItem("login")
     if(found==="true"){
        return true;
     }
     else{
        return false;
    }

     
}
 

