import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

function Signup() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '36ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <div className='signup templete d-flex justify-content-center align-items-center vh-100 bg-white'>
                <div className='form_container p-5 rounded bg-white'>
                    <form>
                        <h3 className='text-center'>Sign Up</h3>
                        <div className='mb-2'>
                            {/* <legend>First Name</legend> */}
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            {/* <label htmlFor='fname'>First Name</label>
                            <input type='text' placeholder='enter First Name' className='form-control' /> */}
                        </div>
                        <div className='mb-2'>
                            {/* <legend>Last Name</legend> */}
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                            {/* <label htmlFor='lname'>Last Name</label>
                            <input type='text' placeholder='enter Last Name' className='form-control' /> */}
                        </div>
                        <div className='mb-2'>
                            {/* <TextField id="outlined-basic" type="emial" label="Email" variant="outlined" /> */}
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                            />
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

                        <div className='d-grid'>
                            <button className='btn btn-primary'>Sign Up</button>
                            <p className='text-end mt-2'>
                                Already Registered <Link to="/" className='ms-2'>Sign in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Box>
    )
}

export default Signup
