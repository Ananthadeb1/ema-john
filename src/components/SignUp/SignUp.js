import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event=>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }


    if(user){
        navigate('/shop');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two password did not match');
            return;
        }
        if(password.length <6){
            setError('password must be in 6 character');
            return;
        }

        createUserWithEmailAndPassword(email,password);

    }

    return (
        <div className='from-container'>
            <div>
            <h2 className='from-taile'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
            <div className='input-group'>
                <label htmlFor='email'>Email : </label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required></input>
            </div>

            <div className='input-group'>
                <label htmlFor='password'>Password : </label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required></input>
            </div>
            <div className='input-group'>
                <label htmlFor='password'>Confiem password : </label>
                <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required></input>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <input className='form-submit' type="submit" name="Sign Up" id=""></input>
            </form>
            <p>Already have an account? <Link className='form-link' to="/login">LogIn.</Link> </p>
            </div>
        </div>
        
    );
};

export default SignUp;