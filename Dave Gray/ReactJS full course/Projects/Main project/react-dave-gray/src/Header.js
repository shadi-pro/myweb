// Header  component :


import React from "react";
 
// import  './index.css' ;     

const Header = () => {
  
  return (
    <header className="App-header" style={{   border:'3px white solid' , width: '100%' , margin:'10px'  }}  > 
      <div className="sub-header"> 
        <h1> Header child component </h1>
        <p> paragraph 1 </p>
        <p> paragraph 2 </p>
        <p> paragraph 3 </p>
        Hello from sub header 
      </div>
    </header>
  );
};

export default Header;
 