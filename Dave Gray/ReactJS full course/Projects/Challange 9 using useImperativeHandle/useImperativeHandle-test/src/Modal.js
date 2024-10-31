// This is a Child component to be exported and inlcuding a defined function inside {useImperativeHandle} callback function  :

import { forwardRef , useImperativeHandle , useState } from 'react'

const Modal = (props , ref) => {
   // Define a state to be used insdie the defined  {useImperativeHandle} :    
   const [ modalState , setModalState] =  useState(false);

   // Define the  {useImperativeHandle}  that containing an object defined function :
   useImperativeHandle(ref, () => (
      {
        openModal : () => setModalState(true)       
      }
    )
  ) 
    
  // Printing a console of the current component : 
  console.log('Child Component rendered ');
  // --------------------------------------------


   // Incased of non changed value of  [modalState] return null [not return  the below element]      :
   if (!modalState)  return null  ;


  return (
    <div className='modal'  style={ {background: 'white' } } >  
      <p> This is the Child Modal </p>
      <button onClick={() =>  setModalState(false) } > Close </button>    
    </div>
  )
}

export default forwardRef(Modal) ;