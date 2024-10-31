
/* The application about using {useImpertaiveHandle} hook to call a defined function in child component , and call it  from inside the parent  Component   */

import { useState , useRef } from 'react';
import  Modal from './Modal' ;  

import './App.css';

function App() {
  // Define a referntial state to be used inside the handling function of the openModal() :
  const modalRef  = useRef(); 
 
  // Define a function including calling and handling [openModal()] function  -  that is being defined inside the child component -  :
  const handleOpenModal = () => {
    modalRef.current.openModal();
  }

  // Printing a console of the current component : 
   console.log('parent Component rendered ');
  // --------------------------------------------
   
  return (
    <main className="App"    >
      <p>  Parent Compoent  </p>
     
      <Modal ref={modalRef}  /> 
      
      <button  onClick={ handleOpenModal } > Open  </button>
 
    </main>
  );
}

export default App;
