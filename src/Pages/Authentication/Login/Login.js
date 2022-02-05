import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginDate] = useState({});
    const {user, loginUser,isLoading} = useAuth()

    const location = useLocation();
    const history = useHistory();


    const handelOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...loginData}
        newData[field] = value;
        setLoginDate(newData)
        console.log(newData)
    }
    const handelSubmitBtn = e =>{
        loginUser(loginData.email, loginData.password, location, history )
        e.preventDefault();
    }
    return (
        <div className='mt-5'>
            <h1 className='text-danger mb-4 fw-bold fst-italic pt-5'>Please Login</h1>
            {user?.email && [
                'success',
              ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  Logged {variant} in Correctly!
                </Alert>
              ))}
            <form onSubmit={handelSubmitBtn}>
                <input 
                className='w-25 text-danger'
                placeholder="Your Email"
                name='email'
                type='email'
                onChange={handelOnChange}
                ></input> <br></br>
                <input 
                className='w-25 m-3 text-danger'
                placeholder="Your Password"
                name='password'
                type='password'
                onChange={handelOnChange}
                ></input><br></br>
                <Button type='submit' className='w-25 mb-3 bg-danger border-danger fw-bold fst-italic'>Login</Button>
            </form>
            {isLoading && <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>}

            <Link to='register' className='text-decoration-none text-danger fw-bold fst-italic mb-5' >NEW USER? PLEASE REGISTER</Link>
        </div>
    );
};

export default Login;