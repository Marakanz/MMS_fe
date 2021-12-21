import React, { useState}  from 'react'
import Fruits from "../../images/fruits.png";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from '../../redux/action';


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            email: email,
            password: password
        }
        register(dispatch,user);
    }
    return (
        <div>
            <div className='p-8 flex item-center max-h-screen'>
                <div className='w-1/3 flex items-center'>
                    <img src={Fruits} className="w-full h-3/4"/>
                </div>
                <div className='w-2/3 items-center justify-center'>
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
