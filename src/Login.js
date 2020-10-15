import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = (e) => {

        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //redirect to home page
            history.push("/");
        })
        .catch( e => alert(e.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //user created and logged in
            history.push("/");
        })
        .catch(e => alert(e.message));
    }
    // console.log(authUser.)
    return (
        <div className="login">
           <Link to="/">
                <img 
                src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
                className="login__logo"
                />
           </Link>

           <div className="login__container">
               <h1>Sign in</h1>
               <form className="login__form">
                   <h5>E-mail</h5>
                   <input type="email" value={email} onChange={event => setEmail(event.target.value)} spellCheck="false"/>
                   <h5>Password</h5>
                   <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                   <button onClick={login} type="submit">Sign In</button>
               </form>
               <p>By signing-in you agree to Amazon's Conditions of Use & Sale.Please see
                   our Privacy Notice,our Cookies Notice and our Interest-Based Ads Notice.</p>
                   <button onClick={register}>Create your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login;
