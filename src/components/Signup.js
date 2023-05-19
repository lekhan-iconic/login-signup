import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup templete d-flex justify-content-center align-items-center vh-100 bg-white'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' placeholder='enter First Name' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type='email' placeholder='enter Last Name' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='Email'>Email</label>
                        <input type='email' placeholder='enter email' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='enter password' className='form-control' />
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
  )
}

export default Signup
