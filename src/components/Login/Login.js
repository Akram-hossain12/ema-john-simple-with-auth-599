import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './login.css'

const Login = () => {
    const {UserLogin}=useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname || '/';

    const loginCliker = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;
        UserLogin(email,password)
        .then(result=>{
            const user=result.user;
            form.reset()
            console.log(user)
            navigate(from ,{replace:true})
        })
        .catch(error=>{
            console.error(error)
        })
        console.log(email,password)
}
    return (
        
             <div className='form-container'>
            <div>
                <h2 className='form-title'>Log in</h2>
            </div>
            <form onSubmit={loginCliker} className=''>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required></input>
                </div>
               
                <input className='btn-submit' type="submit" value='Log in' />
            </form>
            <p>Don't Have an Accuont <Link to='/signup'>Create a Account</Link></p>
        </div>

    );
};

export default Login;