import React from 'react';
import "./Product.css"
import { Link } from "react-router-dom";
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import {useDispatch} from "react-redux";
import {addToBasket} from "./actions";

const Product = ({
  id,
   title,
    image,
     price,
      rating,
       specification,
        detail,
      }) => {

        const dispatch = useDispatch();

        const onAddItemToBasket = () => {
          const item = {
            id,
            title,
            image,
            price,rating,
            specification,
            detail,
          };
          dispatch(addToBasket(item));
        };


  return (
    <div className='product'>
      <div className="info">
     <Link to={'/product/${id}'} className='title'>
       <p>{title}</p>
       </Link>

       <p className="price">
       <strong>$</strong>
       <strong>{price}</strong>
       </p>
    <div className="rating">
    {Array(rating).fill().map((_, index) => ( 
    <p key={index}> str </p>))}

    </div>
    </div>
    <img src={image} alt="" />
    
    <button>
        
       Buy Now
    </button>
    <button onClick={onAddItemToBasket}>
        <i>
          <AddShoppingCartRoundedIcon />
        </i>
       Add To Cart
    </button>

    </div>
  )
}

export default Product