import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useSelector, useDispatch } from "react-redux"
import { addUserData } from '../../Interface/userDataSlice';

const Login = () => {
    const initial = {
        email: "",
        password: ""
    }
    const errorInitial = {
        status: false,
        message: ""
    }
    
    const state = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const [error, setError] = useState(errorInitial);
    const [useInfo, setUserInfo] = useState(initial);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);

    const handleEmailChange = (e) => {
        setUserInfo({ ...useInfo, email: e.target.value });
        if (error.status) {
            setError(errorInitial);
        }
    };

    const handlePasswordChange = (e) => {
        setUserInfo({ ...useInfo, password: e.target.value });
        if (error.status) {
            setError(errorInitial);
        }
    };

    const loginUser = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_PORT}/login`, useInfo, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            const data = res.data.data;
            const Userdata  = {
                id: data._id,
                title: data.title,
                name: data.name,
                email: data.email,
                contactNumber: data.contactNumber,
                assignedClasses: data.assignedClasses
            }
            dispatch(addUserData(Userdata));
            localStorage.setItem('Token', res.data.token);
            console.log(Userdata);
            setError(errorInitial);
        }).catch(err => {
            setError({
                status: true,
                message: err.response.data.message
            })
        })
    }
    return (
        <div className='login-main-container'>
            <div className="logincontainer" id="logincontainer">
                <div className="form-logincontainer sign-in">
                    <form>
                        <h1 className='text-2xl font-bold font-sans mb-4'>Faculty Sign In</h1>
                        <input
                            style={{ border: `1px solid ${error.status ? '#ff0000' : (isFocusedEmail ? 'blue' : '#ccc')}` }}
                            onFocus={() => setIsFocusedEmail(true)}
                            onBlur={() => setIsFocusedEmail(false)}
                            onChange={handleEmailChange}
                            type="email"
                            placeholder="Email"
                            value={useInfo.email || ""}
                        />
                        <input
                            style={{ border: `1px solid ${error.status ? '#ff0000' : (isFocusedPassword ? 'blue' : '#ccc')}` }}
                            onFocus={() => setIsFocusedPassword(true)}
                            onBlur={() => setIsFocusedPassword(false)}
                            onChange={handlePasswordChange}
                            type="password"
                            placeholder="Password"
                            value={useInfo.password || ""}
                        />
                        <a href="/">Forget Your Password?</a>
                        <button onClick={loginUser} type='submit'>Sign In</button>
                        <div className='flex justify-center items-center' style={{ display: `${(!error.status) ? 'none' : ''}` }}>
                            <CancelOutlinedIcon style={{ color: '#ff0000', marginRight: "10px" }} />
                            <p style={{ color: "#ff0000", fontWeight: "600" }}>Not Authenticated</p>
                        </div>
                    </form>
                </div>
                <div className="toggle-logincontainer">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hidden" id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1 className='welcome-note'>Hello, Faculties! <span style={{ fontSize: "27px" }}>👋</span></h1>
                            <p>Welcome Back, Login! To Upload Student Materials</p>
                            <button className="hidden" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
