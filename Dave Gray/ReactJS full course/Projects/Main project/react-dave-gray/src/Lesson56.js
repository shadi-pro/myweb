/* Lesson5 & Lesson6  Components:
  fuctions and events functions  
 */
import React, { useState } from "react";

const Lesson56 = ( {title , subTitle} ) => {
  // A] Define some hooks :
  // 1- Define a [useState] Hook to change a Texual value :
  const [name, setName] = useState("Shadi");

  // Define a  function  of  assigning  a random value of name state by using useState hook setter  :
  const handleName = () => {
    const names = ["Shadi", "Sayed ", "Ali"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  // 2- Define a [useState] Hook to change a numeric  value :
  const [num, setNum] = useState(1);

  // Define a function including changing [Increament] the defined useState variable by using it setter function  :
  const numHandlerInc = () => {
    setNum(num + 1);
  };

  // Define a function including changing [Decreament] the defined useState variable by using it setter function  :
  const numHandlerDec = () => {
    setNum(num - 1);
  };

  // B] Defining some functions => to be used wihtin events :
  // 1-  Define invoked function :
  const invokeFnc = () => {
    console.log("Hello im Shadi from the console  !");
  };

  // 2- Define a function without parameter :
  const func1 = () => {
    console.log(`hello Shadi`);
  };

  // 3- Define a function with parameter :
  const func2 = (user) => {
    console.log(`Hello ${user}`);
  };

  // 4- Define a function with (e) parameter [display syntax of event of [onClick] ] :
  const func3 = (e) => {
    console.log(e);
  };

  // 5- Define a function with (e) parameter [display target element  of event of [onClick] ] :
  const func4 = (e) => {
    console.log(e.target);
  };

  // 6- Define a function with (e) parameter [display  target element inner text   of event of [onClick] ] :
  const func5 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div  style={{ border:'3px white solid' , width: '100%' , margin:'10px' }} >
      <header  style={{fontSize:'50px' , width:'80%' , margin: '5px auto' ,  border:'2px blue solid'   }} > 
        {title}
        <p> {subTitle} </p>  
      </header>

      <h1> Following is Invoke function : </h1>
      <p style={{ color: "green", backgroundColor: "white" }}>
        {" "}
        {invokeFnc()}{" "}
      </p>

      <h1> 1- Following is 'onclick event function' : </h1>
      <button onClick={func1}>
        {" "}
        Click to process a defined function wihtout params{" "}
      </button>

      <h1> 2- Following is 'onclick event function' : </h1>
      <button onClick={() => func2("Shadi")}>
        Click to process a defined function wiht param
      </button>

      <h1> 3- Following is 'onclick event function' : </h1>
      <button onClick={(e) => func3(e)}>
        Click to process a defined function with 'e' param
      </button>

      <h1> 4- Following is 'onclick event function' : </h1>
      <button onClick={(e) => func4(e)}>
        Click to process a defined function with 'e' param
      </button>

      <h1> 5- Following is 'onclick event function' : </h1>
      <button onClick={(e) => func5(e)}>
        Click to process a defined function with 'e' param
      </button>

      <h1>
        Following are buttons using defined useState Hook 'num' to get and
        change/set the value defined state hook value :{" "}
      </h1>
      <p> {num} </p>
      <button onClick={numHandlerInc}>
        Click to change 'increament' the value the upper value 'useState hook'{" "}
      </button>
      <button onClick={numHandlerDec}>
        Click to change 'decreament' the value the upper value 'useState hook'{" "}
      </button>

      <h1>
        Following are buttons using defined useState Hook 'name' to get and
        change/set the value defined state hook value :{" "}
      </h1>
      <p> {name} </p>

      <button onClick={handleName}>
        Click button to change the value the upper value 'useState hook'{" "}
      </button>

    </div>
  );
};

// Sending default values of the props :         
Lesson56.defaultProps = {
  title : "Default value of title prop" , 
  subTitle : "Default value of subTitle prop"  

}





export default Lesson56 ;
