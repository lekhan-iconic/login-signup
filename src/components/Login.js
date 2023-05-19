import React from 'react';
import '../styles/logins.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

function Login() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '36ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='login templete d-flex justify-content-center align-items-center vh-100 bg-white'>
                <div className='form_container p-5 rounded bg-white'>
                    <form>
                        <h3 className='text-center'>Sign In</h3>
                        <div className='mb-2'>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                            />
                            {/* <TextField id="outlined-basic" label="email" variant="emai" /> */}
                            {/* <label htmlFor='Email'>Email</label>    
                            <input type='email' placeholder='enter email' className='form-control' /> */}

                        </div>
                        <div className='mb-2'>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                            {/* <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='enter password' className='form-control' /> */}
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
        </Box>
    )
}

export default Login;
