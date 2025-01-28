import "../styles/Register.css"

function Register() {
    return (
        <div className='register-page'>
        
            <form className='register-form'>
                <h1>Register</h1>
                <div className='name'>
                    <label className='first-name'>First Name
                        <input type='text' id='first-name' name='first-name' />
                    </label>
                    <label className='last-name'>Last Name
                        <input type='text' id='last-name' name='last-name' />
                    </label>
                </div>

                <label className='username'>Username
                    <input type='text' id='username' name='username' />
                </label>

                <label className='password'>Password 
                    <input type='password' id='password' name='password' />
                </label>

                <label className='confirom-password'>Confirm Password
                    <input type='password' id='confirm-password' name='confirm-password' />
                </label>

                <button type='submit' className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register;