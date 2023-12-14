import React from 'react';
import './CartItem.scss';
import Counter from '../../../components/common/Counter/Counter';


const CartItem = ({ item,removeFromCart}) => {
  const {title, price,id}=item




  return (
    <>
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="product-details">
        <span className="product-name">{title}</span>
        <span className="product-price">{`$${price}`}</span>
        <span className="product-quantity">
        <Counter />
        </span>
      </div>
      <button
        className="product-remove"
        onClick={()=>removeFromCart(id)}
      >
        Remove
      </button>
    </div>
   
    </>
  );
};

export default CartItem;
