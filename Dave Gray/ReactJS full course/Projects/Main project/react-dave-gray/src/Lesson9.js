/*  lesson9 component, include :
  1 - Sent props : 
    -- props with simple values => [ title , subTitle ]
    -- props with dynamic values => [ count : extension of defined variable ]

*/

import React from "react";

const Lesson9 = ( {title , subTitle, count}) => {
  return (
    <main style={{ border: "3px white solid", width: "100%", margin: "10px" }}>
      <header
        style={{
          fontSize: "50px",
          width: "80%",
          margin: "5px auto",
          border: "2px blue solid",
        }}
      >
        {title}
        <p>  {subTitle} </p>        
      </header>

      <p> You have {count} list {count === 1 ? 'item' : 'items' }  </p>  
 
    </main>
  );
};

// Sending default props values with this component : 
Lesson9.defaultProp = { 
  title: 'Default value of title prop ' , 
  subTitle: 'Default value of subTitle prop '
} 



export default Lesson9;
