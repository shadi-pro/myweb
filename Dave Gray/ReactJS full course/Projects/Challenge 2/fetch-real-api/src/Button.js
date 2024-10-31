
/*  Button reusable component : 
  - The parent component of this componenot is => [Form.js]      
  - [props] => [buttonText, reqType, setReqType] => to be assinged inside the parent component {Form.js}  
  - [return]  =>   include the button element which is represent the single buttoin in the form Tags => to be called insde the Fom parent component   
  */

import React from 'react'

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      // by cliciking on the  button the [reqType] state will be set by the value of the button text  :  
      onClick={() => setReqType(buttonText)}
      className={ buttonText === reqType ? "selected" : null}
      type='button'
    >
      {buttonText}
    </button>
  )
}

export default Button ;