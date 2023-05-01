import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import ProductIMG from '../../assets/product.png';

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    
    <div className="cart" style={{ backgroundImage: `url(${ProductIMG})`}}>
      <div className="cartTitle">
        <h1><br></br></h1>
      </div>
      <div>
        <h3>Your Cart Items</h3>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout" >
          <p> Subtotal: ${totalAmount} </p>

          <button onClick={() => navigate("/product")}> Continue Shopping </button>
          <button onClick={() => navigate("/checkout")}> Checkout </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      ) }
    </div>
  );
};