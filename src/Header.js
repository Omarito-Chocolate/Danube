import React from 'react'
import './Header.css'
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import { Link } from "react-router-dom";
import Checkout from './Checkout';
import { useSelector, useDispatch } from 'react-redux';
import { logOutInitiate } from "./actions";

const Header = () => {
const { user, basket } = useSelector((state) => state.data);

let dispatch = useDispatch();
const handleAuth = () => {
  if (user) {
  dispatch(logOutInitiate());
}
};
  return (
 
       <nav className='header'>
        <Link to="/">
         <img
         className='header-logo'
         src="https://cdn.shopify.com/s/files/1/2292/5397/files/logo_handwritten_roski.png?height=628&pad_color=ffffff&v=1614914525&width=1200" alt="" />
         </Link>
          
          <div className="header-option" style={{ marginRight: "-10px"}}>
          <RoomRoundedIcon  className="location" />
          </div>

          <div className="header-option">
            <span className="header-option1">Hello</span>
             <span className="header-option2">Select Your Address</span>            
            </div>  

            <div className="search">
             <select>
                <option>All</option>
             </select>

             <input type="text" className='searchInput' />
             <SearchRoundedIcon className="search-Icon" />

            </div>

            <div className="header-nav">
             <Link to={'${user ? "/" : "/login"}'} className='header-link'>
             <div onClick={handleAuth} className="header-option">
             <span className="header-option1">
              Hello, {user ? user.email : "Guest"}{" "}
              </span>
             <span className="header-option2">
              {user ? "Sign Out" : "Sign In"}
              </span>
             </div>
             </Link>
             <Link to="/orders" className='header-link'>
             <div className="header-option">
              <span className="header-option1">Returns</span>
              <span className="header-option2">& Orders</span>
             </div>
             </Link>
             <Link to="/login" className='header-link'>
             <div className="header-option">
              <span className="header-option1">Your</span>
              <span className="header-option2">Prime</span>
             </div>
             </Link>
             <Link to="/checkout" className='header-link'>
             <div className="header-basket">
             <AddShoppingCartRoundedIcon className='basket' />
            <span className="header-option2 basket-count">{basket && basket.length}</span>
             </div>
              </Link>




            </div>
       </nav>
    
    
  )
}

export default Header