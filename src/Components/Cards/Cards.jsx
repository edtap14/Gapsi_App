import { Card } from "./Card";
import React from "react";
import style from "./cards.module.css";

export const Cards = ({
  addProduct,
  deleteProduct,
  getCurrentPageItems,
}) => {
  return (
    <div className={style.wrapper}>
      {getCurrentPageItems().map((card) => {
        return (
          <div>
            <Card
              rating={card?.rating?.averageRating}
              deleteProduct={deleteProduct}
              addProduct={addProduct}
              key={card?.id}
              description={card.description}
              image={card?.image}
              productName={card?.name}
              price={card?.priceInfo?.linePrice}
            />
          </div>
        );
      })}
      
    </div>
  );
};
