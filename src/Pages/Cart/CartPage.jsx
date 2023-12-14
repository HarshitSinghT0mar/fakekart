// CartPage.js
import React from 'react';
import './CartPage.scss';
import CartItem from './CartItem/CartItem';
import SummaryCard from './SummaryCard/SummaryCard';
import { useCartContext } from '../../contexts/CartContext';



const CartPage = () => {

    const {cartItems}=useCartContext()

    console.log(cartItems);
   

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map((item) => (
          
          <CartItem
            key={item.id}
            item={item}
         
          />
        ))}
      </div>

     
      <SummaryCard cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
