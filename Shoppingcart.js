import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Checkout from '.assets/Checkout';

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    // Add more items as needed
  ]);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [preTaxTotal, setPreTaxTotal] = useState(calculatePreTaxTotal(items));

  const removeFromCart = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    setPreTaxTotal(calculatePreTaxTotal(updatedItems));
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
    setPreTaxTotal(calculatePreTaxTotal(updatedItems));
  };

  const calculatePreTaxTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckoutClick = () => {
    setCheckoutVisible(true);
  };

  return (
    <div>
      {checkoutVisible ? (
        <Checkout items={items} preTaxTotal={preTaxTotal} />
      ) : (
        <div>
          <h2>Shopping Cart</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      variant="danger"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Pre-tax Total: ${preTaxTotal}</h4>
          <Button onClick={handleCheckoutClick} variant="primary">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;