import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
const Footer = () => {
  return (
  
<footer className="text-center text-lg-start bg-white text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
   
      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
     

    
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
     
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
           <Link><p>Anguler</p></Link>
           <Link><p>React js</p></Link>
           <Link><p>Vue</p></Link>
           <Link><p>Laravel</p></Link>
        </div>
       

      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
           <Link><p>Pricing</p></Link>
           <Link><p>Order</p></Link>
           <Link><p>Setting</p></Link>
           <Link><p>Help</p></Link>
        </div>
     
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Malhotra Chambers, BridgeLabz Solutions Private Limited, 1st Floor, Deonar, Govandi East, Mumbai, Maharashtra 400088</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>

      </div>

    </div>
  </section>



  <div className="text-center last" >
    ©2022 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Bridgelabz.com</a>
  </div>

</footer>
  );
}

export default Footer