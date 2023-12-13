import React from 'react';
import './SummaryCard.scss';

const SummaryCard = ({ cartItems }) => {

    
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="summary-card">
      <h3>Order summary</h3>
      <ul>
        <li>
          <strong>Total items:</strong> {totalQuantity}
        </li>
        <li>
          <strong>Subtotal:</strong> ${totalPrice.toFixed(2)}
        </li>
        <li>
          <strong>Shipping:</strong> $0.00
        </li>
        <li>
          <strong>Tax:</strong> $0.00
        </li>
        <hr />
        <li>
          <strong>Total:</strong> ${totalPrice.toFixed(2)}
        </li>
      </ul>
    </div>
  );
};

export default SummaryCard;
