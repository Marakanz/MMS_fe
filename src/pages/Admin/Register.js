import React, { useState}  from 'react'
import Fruits from "../../images/fruits.png";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import ClipLoader from "react-spinners/ClipLoader";
import { 
    registerFailure,
    registerStart,
    registerSuccess } from "../../redux/slices/userSlice";



const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector((state)=> state.user.isFetching);
    const error = useSelector((state)=> state.user.error);
    const history  = useHistory();

    const register = async(dispatch, newUser) => {
        dispatch(registerStart());
        try {
                const res = await axios.post("/signup", newUser);
                dispatch(registerSuccess(res.data));
                console.log("New user created");
                console.log(res.data);
                history.push("/admin")
        } catch(err) {
            dispatch(registerFailure());
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const user = {
                username: username,
                email: email,
                password: password
            }
            register(dispatch,user);
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className='p-4 md:p-8 mx-auto flex item-center h-screen'>
                <div className='w-1/3 hidden md:flex items-center'>
                    <img src={Fruits} className="w-full h-3/4"/>
                </div>
                <div className='w-full md:w-2/3 flex items-center justify-center'>
                    <form className='w-full flex flex-col items-center'>
                        <h1 className='subtitle text-center'>Create Admin Account</h1>
                        <input type='text' placeholder="Full name"
                            className='login-input'/>
                        <input type='text' placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            className='login-input' />
                        <input type='email' placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className='login-input' />
                        <input type='password' placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className='login-input' />
                        <button onClick={(e)=> handleSubmit(e)} type="submit" className='buttons w-4/5'>SIGN UP</button>
                        { loading && (
                            <ClipLoader
                                color='#F8650A'
                                loading={loading}
                                size={30}
                            />
                        )}
                        { error && (
                            <p className='text-red-500'>All inputs are required</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
