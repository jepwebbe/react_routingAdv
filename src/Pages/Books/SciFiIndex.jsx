import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Categories from "../Components/Categories";
import NotFound from "../NotFound";
import { StyledNav } from "./BookIndex";

const SciFiGenre = [
  { title: "Dystopian", path: "dystopia", element: <Categories /> },
  { title: "Deep Space", path: "deepspace", element: <Categories /> },
];
const SciFiIndex = () => {
  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <h3>Sci-fi Books</h3>
            <ul>{SciFiGenre.map((genre, i) => <li key={i}><Link to={genre.path}>{genre.title}</Link></li>)}</ul>
          </li>
        </ul>
      </StyledNav>

      <Routes>
        <Route path="/" element={<p>Categories os sci-fi</p>} />
        {SciFiGenre.map((genre, i) =><Route path={genre.path} element={genre.element} key={i} />)}
        <Route path="*" element={<NotFound switchValue="sci-fi"/>} />
      </Routes>
    </>
  );
};

export default SciFiIndex;
