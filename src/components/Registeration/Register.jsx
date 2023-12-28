import React from 'react';
import './Login.css'

const Register = () => {
    return (
        <div className='login-main-container'>
            <div className="logincontainer" id="logincontainer">
                <div className="form-logincontainer sign-in">
                    <form>
                        <h1 className='text-2xl font-bold font-sans mb-4'>Faculty Sign up</h1>
                        <div style={{ width: "100%" }} className='flex justify-center items-center'>
                            <select>
                            <option value="" disabled selected>Title</option>
                                <option value="Mr" key="">Mr</option>
                                <option value="Mrs" key="">Mrs</option>
                            </select>
                            <input style={{ width: "100%" }} type="text" placeholder="Full Name" />
                        </div>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Contact Number" />

                        <a href="/">Forget Your Password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="toggle-logincontainer">
                    <div className="toggle">
                        <div className="toggle-panel toggle-right">
                            <h1 className='welcome-note'>Hello, Admin! <span style={{ fontSize: "27px" }}>👋</span></h1>
                            <p>Welcome Back, Give Faculties Access to our System</p>
                            <button className="hidden" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;