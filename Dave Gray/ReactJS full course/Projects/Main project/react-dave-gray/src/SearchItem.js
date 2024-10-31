// Searching item  component :

import React from "react";

const SearchItem = ({  search, setSearch }) => {
  return (
    // This  Form will directly work without using a submit button -> [so we we will assing the onSubmit  of the whole form as 'preventDefault'    ]
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="Search"> Search</label>

      <input
        id="Search"
        type="text"
        role="searchbox"
        placeholder="Search for Items"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
