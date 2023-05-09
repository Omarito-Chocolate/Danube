import React from 'react';
import "./SingleProduct.css";
import {useParams} from "react-router-dom";
import { products } from './ProductsData';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import {useDispatch} from "react-redux";
import {addToBasket} from "./actions";

const SingleProduct = () => {

    let {id} = useParams();
    let SingleProduct = products.find((item) => item.id === id);
    let dispatch = useDispatch();

    const addItemToBasket = () => {
      const item = {
        id: SingleProduct.id,
        rating: SingleProduct.rating,
        title: SingleProduct.ttle,
        price: SingleProduct.price,
        image: SingleProduct.image,
        specification: SingleProduct.specification,
        detail: SingleProduct.detail,
      };

      dispatch(addToBasket(item));

    }


  return (
    <div className='single-product-container'>
     <img className='single-product-ad' 
     src="" alt="" />

    <div>
        <div className='single-product'>
           <img src={SingleProduct.image} className='single-product-image' alt="" />
            
           <div className="single-product-info">
            <div className="single-product-title">{SingleProduct.title}</div>
            <div className="single-product-rating">
            {Array(SingleProduct.rating)
            .fill()
            .map((_, index) => (
              <p key={index}>str</p>
            ))}
            </div>
           <p className="single-product-price">
            Price: <strong>{SingleProduct.price}</strong>
           </p>
           <div className="single-product-specification">
            <h4>Specification</h4>
           {SingleProduct.specification && SingleProduct.specification.map((item, index) => (
            <li key={index}>{item}</li>
           ))}
           </div>

           <div className="single-product-description">
            <h4>Product Description</h4>
            <p>{SingleProduct.detail}</p>
           </div>

           <button onClick={addItemToBasket}>
            <i>
            <AddShoppingCartRoundedIcon />

            </i>
            Add To Basket
           </button>


            </div> 

        </div>
    </div>
    </div>
  )
}

export default SingleProduct
