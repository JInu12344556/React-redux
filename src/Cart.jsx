import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from './Cartslice';

function Cart(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart); // Assuming your Redux state structure has a slice named 'cart'

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id: id, quantity: cartItems[id].quantity + 1 }));
  };

  const handleDecrease = (id) => {
    if (cartItems[id].quantity > 0) {
      dispatch(updateQuantity({ id: id, quantity: cartItems[id].quantity - 1 }));
    }
  };

  // Calculate total quantity and total amount
  const totalQuantity = Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = Object.values(cartItems).reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
      {Object.values(cartItems).map(item => (
        <div key={item.id}>  {/* Unique key for each cart item */}
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>
            <button key={`decrease_${item.id}`} onClick={() => handleDecrease(item.id)}>Decrease</button>
            {item.quantity}
            <button key={`increase_${item.id}`} onClick={() => handleIncrease(item.id)}>Increase</button>
          </span>
          <span>{item.price * item.quantity}</span>
        </div>
      ))}
      <div>
        <span>Total Quantity: {totalQuantity}</span>
        <span>Total Amount: {totalAmount}</span>
      </div>
    </div>
  );
}

export default Cart;
