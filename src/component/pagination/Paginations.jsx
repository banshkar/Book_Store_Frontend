import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Pagination = (props) => {
   const [count,setCount]=useState(1);
   useEffect(()=>{
    const value =props.showPerPages*count;
     props.onPagination(value-props.showPerPages,value);
   },[count])
  const onButtonClick=(type)=>{
    if(type==="previ"){
      if(count===1){
        setCount(1)
      }
      else{
        setCount(count-1)
      }
    }
    else if(type==="next"){
      if(Math.ceil(props.totalPage/props.showPerPages)===count){
        setCount(count)
      }
      else{
        setCount(count+1)
      }

    }
  }


  return (
  <>
  <div className='d-flex justify-content-between'>
  <button type="button" className="btn btn-primary mx-4" onClick={()=>onButtonClick("previ")}>...Prev</button>
  <button type="button" className="btn btn-primary mt-2 ls mx-4" onClick={()=>onButtonClick("next")}>Next...</button>
  </div>
  </>
  )
}

export default Pagination;