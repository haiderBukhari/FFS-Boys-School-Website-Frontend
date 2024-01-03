import React, { useState } from 'react';
import './Login.css'
import axios from "axios"
import { SuccesToast, ErrorToast } from './../ReactToast';

const Register = () => {
    const temp = {
        name: "",
        email: "",
        title: "",
        password: ""
    };
    const [userData, setUserData] = useState(temp);

    const SubmitRegisteration = (e) => {
        e.preventDefault();
        if(userData.email === "" || userData.name === "" || userData.title==="") {
            return ErrorToast("Please Fill All Fields")
        }
        const FinalData = {...userData};
        console.log(FinalData);
        axios.post(`${process.env.REACT_APP_BACKEND_PORT}/register`, FinalData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res=>{SuccesToast("Accessed Given Successfully"); setUserData(temp)}).catch(err=>ErrorToast("Error in Giving Access"));
    }
    
    return (
        <div className='login-main-container'>
            <div className="logincontainer" id="logincontainer">
                <div className="form-logincontainer sign-in">
                    <form>
                        <h1 className='text-2xl font-bold font-sans mb-4'>Faculty Sign up</h1>
                        <div style={{ width: "100%" }} className='flex justify-center items-center'>
                            <select onChange={(e) => {
                                setUserData((prevData) => ({
                                    ...prevData,
                                    title: e.target.value
                                }))
                            }} style={{ backgroundColor: "#eee", border: "none", marginRight: "10px", height: "36px", borderRadius: '6px', width: "100px", outline: "none" }}>
                                <option value="" disabled selected>Title</option>
                                <option value="Mr" key="">Mr</option>
                                <option value="Ms" key="">Ms</option>
                            </select>
                            <input onChange={(e) => {
                                setUserData((prevData) => ({
                                    ...prevData,
                                    name: e.target.value
                                }))
                            }} style={{ width: "100%" }} type="text" placeholder="Full Name" value={userData.name} />
                        </div>
                        <input onChange={(e) => {
                            setUserData((prevData) => ({
                                ...prevData,
                                email: e.target.value
                            }))
                        }} type="email" placeholder="Email" value={userData.email} />
                        <button style={{marginTop: "20px", marginBottom: "20px"}} onClick={SubmitRegisteration}>Give Access</button>
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