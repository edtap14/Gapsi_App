import React from "react";
import style from "./HomePage.module.css";
import { SearchForm } from "../../Components/SearchForm/SearchForm";
export const HomePage = ({setResult, setLoading}) => {
  return (
    <div className={style.principalBox}>
      <div className={style.boxToSearch}>
        <h2 className={style.title}>GAPSY Ecommerce</h2>
        <SearchForm setResult={setResult} setLoading={setLoading}/>
      </div>
    </div>
  );
};
