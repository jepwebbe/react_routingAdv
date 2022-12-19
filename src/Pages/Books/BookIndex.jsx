import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../NotFound";
import SciFiIndex from "./SciFiIndex";

export const StyledNav = styled.nav``;

const BookIndex = () => {
  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <Link to="crime">Krimier</Link>
          </li>
          <li>
            <Link to="action">Action</Link>
          </li>
          <li>
            <Link to="scifi">Sci-fi</Link>
          </li>
        </ul>
      </StyledNav>
      <Routes>
        <Route path="/" element={<h1>Roden af books</h1>}/>
        <Route path="crime" element={<h2>Krimier</h2>}/>
        <Route path="action" element={<h2>Action</h2>}/>
        <Route path="scifi/*" element={<SciFiIndex />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default BookIndex;
