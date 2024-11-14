import React, { useState } from "react";
import style from "./SearchForm.module.css";
import {getProductos} from '../../Services/Products'

export const SearchForm = ({ setResult, setLoading }) => {
  
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    if (value.trim() !== "") {
      setError({
        ...error,
        [name]: "",
      });
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.search.trim() === "") {
      newErrors.search = "Es necesario ingresar un producto";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
    // const url = `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${productToSearch.search}&page=1&sortBy=best_match`;

    getProductos(formData, setResult, setLoading)

    setFormData({search: ''})
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          className={style.inputSearch}
          type="text"
          id="search"
          name="search"
          placeholder="Busca un producto"
          value={formData.search}
          onChange={handleChange}
        />
        {error.search && <span className={style.error}>{error.search}</span>}
      </div>
    </form>
  );
};
