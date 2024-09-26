import React from "react";
import { useEffect, useState } from "react";

function Pagination2() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProduct = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    // console.log(data);

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };

  const handlePageChange = (seletedPage) => {
    if (seletedPage >= 1 && seletedPage <= totalPages && seletedPage !== page)
      setPage(seletedPage);
    // console.log(page);
  };

  useEffect(() => {
    fetchProduct();
  }, [page]);

  return (
    <div className="App">
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
        <div>
          <span onClick={() => handlePageChange(page - 1)}>◀️</span>
          {[...Array(Math.ceil(totalPages))].map((_, i) => (
            <span onClick={() => handlePageChange(i + 1)}>{i + 1}</span>
          ))}
          <span onClick={() => handlePageChange(page + 1)}>▶️</span>
        </div>
      </div>
    </div>
  );
}

export default Pagination2;
