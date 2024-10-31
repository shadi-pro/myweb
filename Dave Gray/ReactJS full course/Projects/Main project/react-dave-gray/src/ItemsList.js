/* [ItemsList] component will be sending props  to be used it's user component [Lesson9]  , as following  :    
    {items, handleClick, handleDelete} -> these props will be passed through  to be recived inside its  parent component [Lesson7]   
    parent component [Lesson7]  -> will also send these props to be recived inside its parent component [Content]       
  */

import React from "react";
import LineItem from "./LineItem";
// import AddItem from "./AddItem";

const ItemsList = ({ items, handleClick, handleDelete }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
