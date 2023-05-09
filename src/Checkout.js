import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
const { basket, user } = useSelector((state) => state.data);
  return (
    <div className='checkout'>
      <div className="checkout-left">
        <img src="" alt="" className="checkout-ad" 
        />
      
      
      <div>
       <h3>Hello, {user?.email}</h3>
       <h2 className='checkout-title'>
        {basket.length === 0 
        ? "Your Shopping Basket is Empty"
         : "Your Shopping Basket"}
       </h2>
        {basket && 
        basket.map((item) => (
          <CheckoutProduct 
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={iem.rating}
          />
        ))}
       </div>
      </div>

      <div className="checkout-right">
        <SubTotal />
      </div>
    </div>
  )
}

export default Checkout
