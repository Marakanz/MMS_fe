import React, { useState } from 'react';
import Fruits from "../../images/fruits.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/action';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error, } = useSelector((state) => state.user)

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
        <div className=''>
            <div className='p-4 md:p-8 flex flex-col justify-center md:flex-row item-center h-screen'>
                <div className='hidden md:w-1/3 md:flex items-center'>
                    <img src={Fruits} className="w-full h-3/4" />
                </div>
                <div className='md:w-2/3 md:flex items-center justify-center'>
                    <form className='w-full flex flex-col items-center'>
                        <h1 className='subtitle text-center'>Sign in</h1>
                        <input type='text' placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            className='login-input' />
                        <input type='password' placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className='login-input' />
                        <button onClick={handleSubmit} disabled={isFetching} type="submit" className='buttons w-4/5'>SIGN IN</button>
                        {error && <Error />}
                        <div className='flex justify-center my-5 mx-auto'>
                            <p className='text-base font-semibold mx-2'> Don't have an account?</p>
                            <Link to="/admin/register"><p className='text-sm text-blue-600'>Sign Up</p></Link>
                        </div>
                        <div className='justify-center'>
                        { isFetching && (
                            <>
                                 <ClipLoader
                                color='#F8650A'
                                loading={isFetching}
                                size={70}/>
                            </>
                        )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
