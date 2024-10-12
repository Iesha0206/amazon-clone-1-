import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; 

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    // Function to handle sign-in
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in successfully
                console.log("Signed in:", userCredential.user);
                navigate('/'); // Redirect to the home page
            })
            .catch((error) => {
                // Handle Errors here
                console.error("Error signing in:", error.message);
                alert(error.message); // Alert the error message to the user
            });
    };

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // Successfully created a new user
                if (auth) {
                    navigate('/'); // Redirect to the home page
                }
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt="Amazon Logo"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='text' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>Password</h5>
                    <input 
                        type='password' 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />

                    <button type='submit' onClick={handleLogin} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;
