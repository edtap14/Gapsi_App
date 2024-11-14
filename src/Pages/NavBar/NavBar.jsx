import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Image, ShoppingCart } from "@mui/icons-material";
import style from "./NavBar.module.css";
import { Badge } from "@mui/material";

export const NavBar = ({productsCart}) => {
  return (
    <div className={style.divNavBar}>
      <img className={style.imgeLogo} src={logo} alt="logo" />
      <div className={style.shopingCartDiv}>
        <Badge badgeContent={productsCart} color="primary">
          <ShoppingCart style={{ fontSize: "50px" }} />
        </Badge>
      </div>
    </div>
  );
};
