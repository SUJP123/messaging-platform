import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';


function Home() { 
    return (
        <div className='home'>
            <section className='header'>
                <h1>Welcome to a Simple Messaging App</h1>
            </section>

            <section className='buttons'>
                <Link to='/login'>
                    <button className='login'>Log In</button>
                </Link>
                <Link to='/register'>
                    <button className='register'>Get Started</button>
                </Link>
            </section>
            
        </div>
    );
}

export default Home;