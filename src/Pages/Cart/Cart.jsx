// CartPage.js
import React from 'react';
import './Cart.scss';
import CartItem from './CartItem/CartItem';
import { useProductContext } from '../../contexts/ProductContext';
import SummaryCard from './SummaryCard/SummaryCard';
const CartPage = () => {
 
    const {allProducts:cartItems}=useProductContext()

//   // Add item to cart
//   const handleAddToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   // Remove item from cart
//   const handleRemoveFromCart = (item) => {
//     setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
//   };

//   // Apply coupon code
//   const handleApplyCouponCode = () => {
//     // TODO: Implement coupon code logic
//   };

//   // Make purchase
//   const handleMakePurchase = () => {
//     // TODO: Implement purchase logic
//   };

  return (
    <div className="cart-page">
      {/* <h1>Shopping cart</h1> */}

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            // handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>

     
      <SummaryCard cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
