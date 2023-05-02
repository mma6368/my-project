import React, { useContext, useState } from "react";
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [invoice, setInvoice] = useState(null);


  const handlePlaceOrder = () => {
    const invoiceData = {
      totalAmount: totalAmount,
      shippingInfo: {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        emailAddress: email,
        address: address,
        city: city,
        state: state,
        zipCode: zip,
      },
      billingInfo: {
        paymentMethod: paymentMethod,
        cardNumber: cardNumber,
      },
    };

    setInvoice(invoiceData);
  };

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
                    <input
                        type="radio"
                        value="text"
                        name="card"
                        checked={paymentMethod === "credit/debit"}
                        onChange={(e) => setPaymentMethod("credit/debit")}
                    />{" "}
                  Credit/Debit Card
                    <input
                        type="text"
                        name="cardNumber"
                        className="form-control"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <br></br>
                    <input
                        type="radio"
                        value="text"
                        name="card"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod("paypal")}
                     />{" "} 
                   Pay with Paypal <br></br>
                    <input type="text" name="paypal" className="form-control" />
                  </div>
                  <div><br></br></div>
                  <h4>Shipping Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="firstname"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="phonenumber"
                            className="form-control"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label>Email Address</label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <label>Full Address</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <label>State</label>
                            <input
                              type="text"
                              name="state"
                              className="form-control"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <label>Zip Code</label>
                            <input
                              type="text"
                              name="zip"
                              className="form-control"
                              value={zip}
                              onChange={(e) => setZip(e.target.value)}
                            />
                          </div>
                        </div>


                        <div className="col-md-12">
                          <div className="form-group">
                            {cartTotal > 0 ? (
                              <div className="checkout">
                                <p>Subtotal: ${cartTotal}</p>
                                <h4>Total (+tax): ${(cartTotal * 0.06) + cartTotal}</h4>
                              </div>
                            ) : (
                              <h1></h1>
                            )}
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group text-end">
                            <button type="button" className="btn btn-primary" onClick={handlePlaceOrder}>
                              Place Order
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {invoice && (
          <div className="invoice">
            <h2>Invoice</h2>
            <p>
              <strong>Order Total:</strong> ${invoice.totalAmount}
            </p>
            <h3>Shipping Information</h3>
            <p>
              <strong>First Name:</strong> {invoice.shippingInfo.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {invoice.shippingInfo.lastName}
            </p>
            <p>
              <strong>Phone Number:</strong> {invoice.shippingInfo.phoneNumber}
            </p>
            <p>
              <strong>Email Address:</strong> {invoice.shippingInfo.emailAddress}
            </p>
            <p>
              <strong>Address:</strong> {invoice.shippingInfo.address}
            </p>
            <p>
              <strong>City:</strong> {invoice.shippingInfo.city}
            </p>
            <p>
              <strong>State:</strong> {invoice.shippingInfo.state}
            </p>
            <p>
              <strong>Zip Code:</strong> {invoice.shippingInfo.zipCode}
            </p>
            <h3>Billing Information</h3>
            <p>
              <strong>Payment Method:</strong> {invoice.billingInfo.paymentMethod}
            </p>
            <p>
              <strong>Card Number:</strong> {invoice.billingInfo.cardNumber}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

  
  
                   






