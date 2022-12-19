import React, { useEffect, useState } from "react";

const NotFound = ({switchValue}) => {
  const [errorSection, setErrorSection] = useState("");
  console.log(errorSection);

  useEffect(() => {
    switch (switchValue) {
      case "sci-fi":
        setErrorSection("Denne sci-fi-genre blev ikke fundet");
        break;
      case "productindex":
        setErrorSection("Dette produkt blev ikke fundet");
        break;
      case "home":
        setErrorSection("Denne home-side blev ikke fundet");
        break;
      default:
        setErrorSection("Siden blev ikke fundet");
    }
  }, [switchValue]);
  return (
    <section>
      <article>
        <header>
          <h2>404</h2>
        </header>
        <p>{errorSection}</p>
      </article>
    </section>
  );
};

export default NotFound;
