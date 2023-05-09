import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Register from './Register';
import Login from './Login';
import {useDispatch} from "react-redux";
import { auth } from "firebase";
import { setuser } from "./actions";
import SingleProduct from "./SingleProduct";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  pk_test_51N5Vb9IKIWCrbReq4YT9qdUT50a9ej85PwG9BjYQRcSDFTxUgr7joCdjJHxerjIX57GPrALGNTQPAZA3IPnCxF0h00Y32Z58Yt
)

function App() {
let dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch(setuser(authUser));
    } else {
      dispatch(setuser(null));
    }
  });
}, [dispatch]);


  return (
<Router>
    <div className="App">
       <Header />

     <Routes>
      <Route path="/checkout"
        
        element={<Checkout />}
        
        
        />
        </Routes>

<Routes>
      <Route path="/payment">
        
        {<Elements stripe={promise}>
        <Payment />
        </Elements>}
      
        </Route>

      <Route path="/product/:id">
     <Header />
     <SingleProduct />

      </Route>

      

      

       
       <Route path="/register"

       element={<Register />}
      
       />

       <Route path="/login"
       element={<Login />}

       />

      <Route path="/"
  
     element={<Home />} />
     
     </Routes>
    </div>
  </Router>
  );
};

export default App;
