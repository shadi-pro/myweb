//  Lesson7, Lesson8 , Lesson 9 components  :

import React from "react";
// import { useState } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

const Lesson7 = ({
  title,
  subTitle,
  items,
  setItems,
  handleClick,
  handleDelete,
  newItem,
  setNewItem,
  handleSubmit,
  search,
  setSearch,
}) => {
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
        This is the {title}
        <p> {subTitle} </p>
      </header>

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem search={search} setSearch={setSearch} />

      {items.length ? (
        <ItemsList
          items={items}
          setItems={setItems}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
      ) : (
        <p style={{ color: "red" }}> Sorry the list is empty </p>
      )}
    </main>
  );
};

// Sending default values of props :
Lesson7.defaultProps = {
  title: " Lesson7 title",
  subTitle: " Lesson7 subTitle",
};

export default Lesson7;
