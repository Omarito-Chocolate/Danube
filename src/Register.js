import React, {useState, useEffect, useHistory } from 'react'
import "./Register.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { registerInitiate } from "./actions";

const Register = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const user = useSelector(state => state.data);

        const history = useHistory();

        console.log("user=>", user);

        useEffect(() => {
          history.push("/");
        }, [user, dispatch]);

        let dispatch = useDispatch();

        const register = (e) => {
            e.preventDefault();
            dispatch(registerInitiate(email, password));
            setEmail("");
            setPassword("");
        };
          return (
            <div className='register'>
                <Link to="/">
                 <img src="https://cdn.shopify.com/s/files/1/2292/5397/files/logo_handwritten_roski.png?height=628&pad_color=ffffff&v=1614914525&width=1200" className='register-logo' alt="logo" />
        
                </Link>
                <div className="register-container">
                 <h1>Create Account</h1>
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
                    <button type='submit' onClick={register} className='continue'>
                        Continue </button>
                    
                    <div className='detail'>
                        <p>Already have an account ?</p>
                       <Link to="/login" className='signIn-link'>
                         <h3>Sign In</h3>
                      </Link>
                        
                    </div>


                 </form>
           </div>
        </div>


  
  )
}

export default Register
