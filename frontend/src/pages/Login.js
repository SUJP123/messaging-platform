import React from 'react';
import '../styles/Login.css';

function Login() {
    return (
        <div className='login-page'>
            <form className='login-form'>
                <h1>Login</h1>

                <label className='username'>Username 
                    <input type='text' id='username' name='username' />
                </label>

                <label className='password'>Password
                    <input type='password' id='password' name='password' />
                </label>

                <button type='submit' className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;