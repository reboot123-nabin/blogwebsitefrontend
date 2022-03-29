import React from 'react'

const Cart = () => {
    const{isEmpty,items,totalItems,totalUniqueItems,cartTotal,updateItemQuantity,removeItem,emptyCart}=useCart();
  return (
    <div>Cart</div>
  )
}

export default Cart