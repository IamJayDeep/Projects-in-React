import React, { useState } from "react";
import data from "../Search/data";

function Pagination({ data, itemPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  // finding index of first and last item
  const start = (currentPage - 1) * itemPerPage;
  const end = start + itemPerPage;

  //Items showes in One page
  const pageItems = data.slice(start, end);

  //page Number and total Pages
  const totalPages = Math.ceil(data.length / itemPerPage);
  const pageNum = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNum.push(i);
  }

  return (
    <div>
      <ul>
        {pageItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div>
        {pageNum.map((number) => (
          <span key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
