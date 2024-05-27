import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ResetPassword from './ResetPassword';
import ClassModel from './selectClassModel';
import { useNavigate } from 'react-router-dom';

const NewFaculty = () => {
    const userData = useSelector(state => state.userData);
    const [resetPassword, setResetPassword] = useState(false);
    const [classChange, setClassChange] = useState(false);
    const Navigate = useNavigate();
    return (
        <div style={{margin: "0 20px"}}>
            <h1 style={{ textAlign: 'center', fontSize: "20px", margin: "20px", fontFamily: "sans-serif" }}>Hello <span style={{ fontSize: "30px", paddingRight: "10px" }}>👋</span> {userData.title} {userData.name} </h1>
            {
                (!userData.isPasswordChanged || !userData.isUserInfoChanged) && <>
                    <p style={{ textAlign: "center", fontSize: "17px", marginTop: "20px", lineHeight: "2.3rem", marginBottom: "20px" }}>Welcome to the First Time at our FFS Boys System.</p>
                    <p style={{ textAlign: "center", fontSize: "17px", margin: "auto", marginTop: "18px", lineHeight: "2.3rem", maxWidth: "600px" }}>You have to Complete Onboarding process one time only by Reseting your Password and select classes in order to get Started.</p>
                </>
            }
            <div className='flex justify-center flex-wrap items-center mt-4'>
                {
                    !userData.isPasswordChanged && <button onClick={() => { setResetPassword(true) }} className='font-semibold mt-2 flex items-center' style={{ bottom: '10px', right: '20px', padding: "7px 10px", backgroundColor: 'rgb(26, 118, 209)', color: "#fff", borderRadius: "6px" }}>Reset Password <ArrowForwardIcon style={{ color: "#fff", paddingLeft: "5px", fontSize: "30px" }} /></button>
                }
                {
                    !userData.isUserInfoChanged && <button onClick={() => { setClassChange(true) }} className='font-semibold ml-3 mt-2 flex items-center' style={{ bottom: '10px', right: '20px', padding: "7px 10px", backgroundColor: 'rgb(26, 118, 209)', color: "#fff", borderRadius: "6px" }}>Select Class <ArrowForwardIcon style={{ color: "#fff", paddingLeft: "5px", fontSize: "30px" }} /></button>
                }
                {
                    userData.isUserInfoChanged && userData.isPasswordChanged && (
                        <div className='flex flex-col justify-center items-center'>
                            <p style={{ textAlign: "center", fontSize: "17px", marginTop: "20px", lineHeight: "2.3rem", marginBottom: "20px" }}>Your Profile has been updated and you have completed onboarding process. Click on the button below to go to your dasboard.</p>
                            <button onClick={() => { Navigate('/faculty/dashboard') }} className='font-semibold ml-3 mt-2 flex items-center' style={{ bottom: '10px', right: '20px', padding: "7px 10px", backgroundColor: 'rgb(26, 118, 209)', color: "#fff", borderRadius: "6px" }}>Dashboard <ArrowForwardIcon style={{ color: "#fff", paddingLeft: "5px", fontSize: "30px" }} /></button>
                        </div>
                    )
                }
            </div>
            <ResetPassword open={resetPassword} setOpen={setResetPassword} />
            <ClassModel open={classChange} setOpen={setClassChange} />
        </div>
    )
}

export default NewFaculty