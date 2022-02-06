import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginDate] = useState({});
    const {user,register,isLoading,error} = useAuth();
    const history = useHistory();
    const handelOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...loginData}
        newData[field] = value;
        setLoginDate(newData)
    }
    const handelSubmitBtn = e =>{
        if(loginData.password !== loginData.password2){
            alert('your password did not match')
            return
        }
        register(loginData.email, loginData.password, history)
        alert('yes submit')
        e.preventDefault();
    }
    return (
        <div className='mt-5'>
            <h1 className='text-danger mb-4 fw-bold fst-italic pt-5'>Please Register</h1>
            {user?.email && [
                'success',
              ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  User{variant} Created Successfully!
                </Alert>
              ))}
            { !isLoading && <form onSubmit={handelSubmitBtn}>
                <input 
                className='w-25 text-danger '
                placeholder="Your Email"
                name='email'
                type='email'
                onBlur={handelOnBlur}
                ></input> <br></br>
                <input 
                className='w-25 m-3 text-danger'
                placeholder="Your Password"
                name='password'
                type='password'
                onBlur={handelOnBlur}
                ></input><br></br>
                <input 
                className='w-25 mb-3 text-danger'
                placeholder="Conform Password"
                name='password2'
                type='password'
                onBlur={handelOnBlur}
                ></input><br></br>
                <Button type='submit' className='w-25 mb-3 bg-danger border-danger fw-bold fst-italic'>Register</Button>
            </form>}
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
            <Link to='login' className='text-decoration-none text-danger fw-bold fst-italic mb-5' >ALREDY REGISTERED? PLEASE LOGIN</Link>
        </div>
    );
};

export default Register;