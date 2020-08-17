import React, { useContext, useState } from "react";
import { Context } from "../../context/appContext";
import { Link } from "react-router-dom";

const Search = () => {
  const { setToggleSearch, toggleSearch, language, ElementsEN } = useContext(
    Context
  );
  const [filtered, setFiltered] = useState([]);
  const [filteredSymbol, setFilteredSymbol] = useState([]);

  const handleChange = (e) => {
    let query = e.target.value.trim().toLowerCase();

    if (query) {
      const filteredElementsName = ElementsEN.filter((element) =>
        element.name.toLowerCase().includes(query)
      );
      const filteredElementsSymbol = ElementsEN.filter((element) =>
        element.symbol.toLowerCase().includes(query)
      );

      setFiltered(filteredElementsName);
      setFilteredSymbol(filteredElementsSymbol);
    } else {
      setFiltered([]);
      setFilteredSymbol([]);
    }
  };

  return (
    <div className={toggleSearch ? `Search active` : `Search`}>
      <div className="SearchInput">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder={language ? "Search Element ..." : "Барај Елемент ..."}
        />
        <i
          className="fas fa-times fa-2x searchIcon "
          onClick={setToggleSearch}
        ></i>
        {filteredSymbol.map((el, index) => (
          <Link
            className="SearchLink"
            key={index}
            to={`details/${el.number}`}
            onClick={setToggleSearch}
          >
            <h4>{el.symbol}</h4>
          </Link>
        ))}
        {filtered.map((el, index) => (
          <Link
            className="SearchLink"
            key={index}
            to={`details/${el.number}`}
            onClick={setToggleSearch}
          >
            <h4>{el.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
