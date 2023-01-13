import React from 'react'
import { isLogout } from '../../services/User_Service'; 
import "./Header.css"
import {toast,ToastContainer}from 'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom';
import WithRouter from '../../utility/WithRouter';
const Header =(props)=>{

      const logOutHandle  =(e)=>{
          e.preventDefault();
          const token  =localStorage.getItem("token");
          console.log(token)
           isLogout(token).then((response)=>{
            props.navigate("/login")
            console.log(response.data);
            toast.success(response.data);
            localStorage.setItem("login",false);
           }).catch((error)=>{
              console.log(error)
           })
        
      }
     let len =localStorage.getItem("item")
    return(
        <>
      <nav className="navbar  navbar-expand-lg ">
  <a className="navbar-brand" href="#">BOOK STORE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/book" className='link'>Home</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.method}/>
      <button className="btn btn btn-secondary btn-sm my-2 my-sm-0" type="submit" onClick={props.second}>Search</button>
     <button className="btn btn-success btn-sm my-2 my-sm-0 mx-4 " type="submit" onClick={logOutHandle} >Logout</button>
     <Link to="/login"><button className="btn btn-dark btn-sm mx-4 " type="submit">Login</button></Link>
  <Link to="/order"><button className="btn  btn-primary btn-sm  " type="submit">MyCart({len})</button></Link>
    </form>
  </div>
</nav>
        </>
    );
}
export default  WithRouter(Header);
