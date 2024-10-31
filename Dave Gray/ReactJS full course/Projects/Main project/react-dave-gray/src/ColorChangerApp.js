/* [Color Changer]  Sub Application  , including  :
   -- define both of the states variables used inside the  { [ colorValue  ] ,  [hexValue]} and thier setter functions
   -- importing both of application elements [Input , Sqaure] , with assinging their props by the  defined  states
*/

import React, { useState } from "react";
import Input from "./Input";
import Square from "./Square";

const ColorChangerApp = () => {
  // State Variable  of the current color[by text value] of the displayer Section :
  const [colorValue, setColorValue] = useState("Empty Value");

  // State Variable  of the current color[by Hex value] of the displayer section  :
  const [hexValue, setHexValue] = useState("Empty Value");

  // State Variable of the text color inside the section [as boolean]  :
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="ColorDisplayer">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />

      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
};

export default ColorChangerApp;
