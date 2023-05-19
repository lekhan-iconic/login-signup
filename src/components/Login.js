import React from 'react';
import '../styles/logins.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='login templete d-flex justify-content-center align-items-center w-100 h-100 vh-100 bg-white'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor='Email'>Email</label>
                        <input type='email' placeholder='enter email' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='enter password' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-check' id='check' />
                        <label htmlFor='check' className='custom-input-label ms-2'>
                            Remember Me
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Sign In</button>
                    </div>
                    <div>
                        <p className='text-end mt-2'>
                            <Link to="/signup" className='ms-2'>Sign up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
