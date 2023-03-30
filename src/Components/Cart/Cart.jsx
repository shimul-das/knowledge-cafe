import React from 'react'
import './cart.css'

const Cart = ({cart}) => {
    //console.log(cart);
    let total=0;
    let quantity=0;
    let totalShipping=0;
    for(let product of cart){
        // if(product.quantity===0){
        //     product.quantity=1; 
        // }
      product.quantity=product.quantity || 1;
      total= total+product.price*product.quantity
      totalShipping=totalShipping+product.shipping;
      quantity=quantity+product.quantity;
    }
    const tax=(total*5)/100;
    const grand_total=total+tax
  return (
    <div className='cart'>
        <h4>Order Summary</h4>
        <p className='cart-item'>Added Product:{quantity}</p>
        <p className='cart-item'>Total Price:${total}</p>
        <p className='cart-item'>Total Shipping Charge:${totalShipping}</p>
        <p className='cart-item'>Tax: ${tax}</p>
        <p className='grand-total'>Grand Total:${grand_total} </p>

    </div>
  )
}

export default Cart