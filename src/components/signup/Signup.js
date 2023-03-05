import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './signup.css'

const Signup = () => {
    const [error,setError]=useState(null);
    const {userSignin}=useContext(AuthContext)
    const submitCliker = (event)=>{
            event.preventDefault()
            const form = event.target;
            const email=form.email.value;
            const password=form.password.value;
            const confirm =form.confirm.value;
        
            if(password.length < 6){
                setError('set at least 6 carecter !')
                return;
            }
            if(password !== confirm){
                setError('Your password no match!')
                return;
            }
            userSignin(email,password)
            .then(result=>{
                const user = result.user;
                
                form.reset();
                console.log(user)
            })
            .catch(error=>{
                console.error(error)
            })
            console.log(email,password,confirm)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
            </div>
            <form onSubmit={submitCliker} className=''>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required></input>
                </div>
                
                <div className='form-control'>
                    <label htmlFor='password'>Confirm Password</label>
                    <input type='password' name='confirm' required></input>
                </div>
                <p className='error-text'>{error}</p>
                <input className='btn-submit' type="submit" value='Sign Up' />
            </form>
            <p>Already Have an Accuont <Link to='/login'>Log in</Link></p>
        </div>
    );
};

export default Signup;