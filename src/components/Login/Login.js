import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event=>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div className='from-container'>
            <div>
            <h2 className='from-taile'>Login</h2>
            <form onSubmit={handleUserSignIn}>
            <div className='input-group'>
                <label htmlFor='email'>Email : </label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required></input>
            </div>

            <div className='input-group'>
                <label htmlFor='password'>Password : </label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required></input>
            </div>
            <p style={{color:'red'}}>{error?.message}</p>
            {
                loading && <p>loading...</p>
            }
            <input className='form-submit' type="submit" name="Login" id=""></input>
            </form>
            
            <p>New to ema-john? <Link className='form-link' to="/SignUp">Create account.</Link> </p>
            </div>
        </div>
    );
};

export default Login;