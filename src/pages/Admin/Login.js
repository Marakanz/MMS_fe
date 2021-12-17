import React, { useState } from 'react';
import Fruits from "../../images/fruits.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/action';

const Login = () => {
    const [username, setUsername ] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        login(dispatch, user)
    }
const Error = () => {
    console.log(error)
    return (
        <>
            <h1 className='text-sm text-red-600'> Something went wrong</h1>
        </>
    )
}

    return (
        <div className='p-8 flex item-center max-h-screen'>
            <div className='w-1/3 flex items-center justify-center'>
                <img src={Fruits} className="w-full h-2/3"/>
            </div>
            <div className='w-2/3 flex items-center justify-center'>
                <form className='w-full flex flex-col items-center'>
                    <h1 className='subtitle text-center'>Sign in</h1>
                    <input type='text' placeholder="Username" 
                    onChange={(e)=> setUsername(e.target.value)} 
                    className='login-input'/>
                    <input type='password' placeholder="password"
                    onChange={(e)=> setPassword(e.target.value)} 
                    className='login-input'/>
                    <button onClick={handleSubmit} disabled={isFetching} type="submit" className='buttons w-4/5'>SIGN IN</button>
                    { error && <Error/>}
                </form>
            </div>
        </div>
    )
}

export default Login
