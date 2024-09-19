import React, { useState } from "react";
import items from "./data";

function Search() {
  const [search, setSearch] = useState("");

  const filterItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toString().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filterItems.map((val, i) => (
          <ul key={i}>
            <li>Category: {val.category}</li>
            <ul>
              <li> Name: {val.name}</li>
              <li>Price: {val.price}</li>
            </ul>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Search;
