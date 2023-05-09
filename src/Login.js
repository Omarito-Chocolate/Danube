import React, {useState, useEffect, useHistory } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import {useSelector, useDispatch} from "react-redux";
import { loginInitiate } from "./actions";


const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const user = useSelector((state) => state.data);

let history = useHistory();
let dispatch = useDispatch();

useEffect(() => {
  if (user) {
    history.push("/")
  }
}, [user, dispatch]);


const signIn = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail("")
    setPassword("")
}
  return (
    <div className='login'>
        <Link to="/">
         <img src="https://cdn.shopify.com/s/files/1/2292/5397/files/logo_handwritten_roski.png?height=628&pad_color=ffffff&v=1614914525&width=1200" className='login-logo' alt="" />

        </Link>
        <div className="login-container">
         <h1>Sign In</h1>
         <form>
            <h5>Email</h5>
            <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' onClick={signIn} className='login-signin'> </button>
         </form>
         <p>
          By continuing, you agree to Danube's Condition of Use and Privacy Notice.
         </p>
        </div>
        <p>New To Danube ?</p>
        <Link to="/register">
            <button className='login-register'>Create Your Danube Account</button>
        
        </Link>
</div>
  );
};

export default Login

