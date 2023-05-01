import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import ProductIMG from '../../assets/product.png';

import '../Home.css';

export const Checkout = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div style={{ backgroundImage: `url(${ProductIMG})`}}>
            <div className="py-4 bg-warning">
                <div className="container"></div>
            </div>
            <div className="cartTitle">
        <h1></h1>
      </div>
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Shipping Method</h4>
                                    <div>
                                        <input type="radio" value="text" name="card" /> Standard Shipping <br></br>
                                        <input type="radio" value="text" name="card" /> Express Shipping <br></br>

                                    </div>
                                    <div><br></br></div>
                                    <h4>Payment Method</h4>
                                    <div>
                                        <input type="radio" value="text" name="card" /> Credit/Debit Card
                                        <input type="text" name="firstname" className="form-control" />
                                        <br></br>
                                        <input type="radio" value="text" name="card" /> Pay with Paypal <br></br>
                                        <input type="text" name="firstname" className="form-control" />


                                    </div>
                                    <div><br></br></div>

                                    <h4>Shipping Information</h4>


                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>First Name</label>
                                                <input type="text" name="firstname" className="form-control" />

                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Last Name</label>
                                                <input type="text" name="lastname" className="form-control" />

                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Phone Number</label>
                                                <input type="text" name="phonenumber" className="form-control" />

                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Email Address</label>
                                                <input type="text" name="email" className="form-control" />

                                            </div>

                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label>Full Address</label>
                                                <input type="text" name="address" className="form-control" />

                                            </div>

                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>City</label>
                                                <input type="text" name="city" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>State</label>
                                                <input type="text" name="state" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>Zip Code</label>
                                                <input type="text" name="zip" className="form-control" />
                                                <div className="col-md-12">

                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">

                                                {totalAmount > 0 ? (
                                                    <div className="checkout">
                                                        <p> Subtotal: ${totalAmount} </p>

                                                        <h4> Total (+tax): ${totalAmount * 0.06 + totalAmount} </h4>
                                                    </div>
                                                ) : (
                                                    <h1></h1>
                                                )}

                                            </div>

                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group text-end">
                                                <button type="button" className="btn btn-primary">Place Order</button>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};





