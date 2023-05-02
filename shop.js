import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import ProductIMG from '../../assets/product.png';

import './shop.css';


export const Shop = () => {
  return (
    <div className="shop"style={{ backgroundImage: `url(${ProductIMG})`}}>
      <div className="cartTitle">
        <p><br></br></p>
      </div>
      <div className="shopTitle">
        <h1>Top & Bottom wears</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};