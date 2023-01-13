import React from 'react';
import {useLocation,useNavigate} from 'react-router-dom';

function WithRouter(Component) {

     function ComponentWithRouter(props){
        let location=useLocation()
        let navigate=useNavigate()
        return (
         <Component  {...props} location={location} navigate={navigate}  />  
        );

     }
    return ComponentWithRouter;
}

export default WithRouter;