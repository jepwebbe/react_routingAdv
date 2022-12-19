import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { StyledNav } from "../Books/BookIndex";
import NotFound from "../NotFound";

const ProductIndex = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const renderProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/categories");
        if (response.data) {
          setApiData(response.data.slice(0, 10));
        }
      } catch (error) {
        console.error(error);
      }
    };
    renderProducts();
  }, []);
  return (
    <>
        <StyledNav>
            <ul>
                <li><h3>Produktindex</h3>
                <ul>
                    {apiData.map((cat, i) => <li key={i}>
                        <Link to={cat}>{cat}</Link>
                    </li>)}
                </ul>
                </li>
            </ul>
        </StyledNav>
        <Routes>
            <Route path="/" element={<p>Roden af ProductIndex</p>} />
            
            <Route path="*" element={<NotFound switchValue="productindex" />} />
        </Routes>
        <Outlet />
    </>
  );
};

export default ProductIndex;
