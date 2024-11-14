import React from "react";
import style from "./card.module.css";
import { Button } from "@mui/material";

export const Card = ({ image, price, description, productName, addProduct, deleteProduct }) => {

  return (
    <div className={style.cardBox}>
      <div className={style.imageBox}>
        <img className={style.image} src={image} alt="imagen" />
      </div>
      <div className={style.boxData}>
        <div className={style.boxName}>
          <span className={style.nameProduct}>{productName}</span>
          <span className={style.priceProduct}>{price}</span>
        </div>
        <div>
          <span className={style.descriptionProduct}>{description}</span>
        </div>
        
      </div>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="outlined" color="success" onClick={addProduct}>
            Agregar al carrito
          </Button>
          <Button variant="outlined" color="error" onClick={deleteProduct}>
            Eliminar del carrito
          </Button>
        </div>
    </div>
  );
};
