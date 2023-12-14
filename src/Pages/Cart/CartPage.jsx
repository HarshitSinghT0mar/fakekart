// CartPage.js
import React from 'react';
import './CartPage.scss';
import CartItem from './CartItem/CartItem';
import SummaryCard from './SummaryCard/SummaryCard';
import { useCartContext } from '../../contexts/CartContext';



const CartPage = () => {

    const {cartItems,setCartItems}=useCartContext()

   const removeFromCart=(id)=>{
    const restCartItems=cartItems?.filter(item=>{
      return item.id!==id
    })
     setCartItems(restCartItems)
   }

   const clearCart=()=>{
     setCartItems([])
   }

  return (
    <>
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map((item) => (
          
          <CartItem
            key={item.id}
            item={item}
         removeFromCart={removeFromCart}
         clearCart={clearCart}
          />
        ))}
      </div>

     
      <SummaryCard cartItems={cartItems} />
    </div>
    <button onClick={()=>clearCart()}>Clear Cart</button>
</>
  );
};

export default CartPage;
