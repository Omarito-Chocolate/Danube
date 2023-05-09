import React from 'react'
import "./CheckoutProduct.css"
import { useDispatch } from "react-redux"
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';



const CheckoutProduct = ({ id, title, image, rating, price }) => {
  let dispatch = useDispatch();

const removeItemFromBasket = () => {
  dispatch(removeItemFromBasket(id));
}


  return (
    <div className='checkout-product'>
      <img src={image} className='checkout-product-image' alt="" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
          .fill()
          .map((_, index) => (
            <p key={index}>str</p>
          ))}
        </div>
        <button onClick={removeItemFromBasket}>
          <i> <AddShoppingCartRoundedIcon /> </i>
          Remove from Basket
        </button>
      </div>
      
    </div>
  )
}

export default CheckoutProduct
