
/* [Input] Second  element of  the Color Changer app , inlcuding the   : 
  -- importing library [colornames] to be used converting the nomral value of the color into as hex value => [to be used isnde the setHexValue() ]     
  -- preventing the main Form from the default submitting           
  -- adding [onChange() ] to the input field with calling both props of the  states variables setter functions to be called insde the parent component :
   --- { setColorValue } => to be  assigned by this input value inserted      
   --- { setHexValue } =>  tyo be assinged by this input value inserted after the convertin into the Hex value  
   ---  Switching [button] to toggle the font color inside the section   =< [between black  and white ] : by using boolean state and using  it section style conditinal  valur of the color + (onClick) event of the toggle button 
*/

import React from "react";
import colorNames from "colornames";

const Input = ({ 
  colorValue, setColorValue, setHexValue , isDarkText , setIsDarkText
}) => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <label> Add Color name : </label>

      <input
        className="colorInput"
        autoFocus
        required
        type="text"
        placeholder="Add Color name"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />

      <button 
        type='button' 
        onClick = {() =>  setIsDarkText(!isDarkText) }
      > 
        Toggle Text Color 
      </button>
      
    </form>
  );
};

export default Input;
 