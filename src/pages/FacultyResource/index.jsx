import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import UpdateIcon from '@mui/icons-material/Update';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ErrorToast } from '../../components/ReactToast';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { addUserData } from '../../Interface/userDataSlice';
import UploadClassesDialog from './updateClassesDialog';

export const FacultyResources = () => {
    const FacultyId = useSelector(state => state.userData.id);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [updateClasses, setUpdateClasses] = useState(false);
    const fetchFacultyData = async () => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_BACKEND_PORT}/register/${FacultyId}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            setLoading(false);
            const Userdata = {
                id: res.data.data._id,
                ...res.data.data
            }
            dispatch(addUserData(Userdata));
            setUserData(Userdata);
        }).catch(err => {
            setLoading(false);
            ErrorToast(err.message)
        })
    }
    useEffect(() => {
        fetchFacultyData();
    }, []) //eslint-disable-line
    return (
        <div>
            {
                userData && (<div style={{ margin: "0 15px" }}>
                    <div className='flex justify-center item-center'>
                        <button className="flex items-center" onClick={()=>{setUpdateClasses(!updateClasses)}} style={{ padding: "8px 20px", backgroundColor: 'rgba(255, 0, 0, 0.7)', color: "#fff", borderRadius: "6px", margin: "20px 0 10px 0 " }}>Update Assigned Classes <UpdateIcon style={{ color: "#fff", paddingLeft: "5px", fontSize: "30px" }} /> </button>
                    </div>
                    <h1 style={{ textAlign: 'center', fontSize: "20px", margin: "20px", fontFamily: "sans-serif" }}>Hello <span style={{ fontSize: "30px", paddingRight: "10px" }}>👋</span> {userData?.title} {userData.name} </h1>
                    <p style={{ textAlign: "center", fontSize: "16px", marginTop: "20px" }}>Respected Faculties! You can manage students materials, records and homework here!</p>
                    <div className='flex justify-center items-center flex-wrap'>
                        {
                            userData?.assignedClasses?.map((Item) => (
                                Item?.subjects?.map((subject) => (
                                    <div style={{ fontSize: "15px", fontFamily: "sans-serif", margin: "40px 20px 20px", boxShadow: "0px 0px 10px #ccc", borderRadius: "6px", width: "300px", height: "200px", border: "1px solid #ccc", position: "relative" }}>
                                        <h1 className='font-semibold' style={{ fontSize: "20px", padding: "20px", }}><span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Class:</span> <span style={{ paddingLeft: "10px", fontSize: "18px", color: "grey" }}>{Item.class}</span></h1>
                                        <h1 className='font-semibold' style={{ fontSize: "18px", padding: "10px 20px 20px 20px" }}><span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Subject: </span><span style={{ paddingLeft: "10px", fontSize: "16px", color: "red" }}>{subject}</span></h1>
                                        <button onClick={() => {
                                            Navigate(`/faculty/upload/resources/${Item.class}/${subject}/${userData.id}`)
                                        }} className="flex justify-center items-center" style={{ position: "absolute", bottom: '10px', right: '20px', padding: "7px 30px", backgroundColor: 'rgb(26, 118, 209)', color: "#fff", borderRadius: "6px" }}>Manage Resources <ArrowForwardIcon style={{ color: "#fff", paddingLeft: "5px", fontSize: "30px" }} /> </button>
                                    </div>
                                ))
                            ))
                        }
                    </div>
                </div>)
            }
            {
                loading && <div style={{ width: "100%", margin: "40px 0" }} className='flex justify-center items-center'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress style={{ fontSize: "20px" }} />
                    </Box>
                </div>
            }
            <UploadClassesDialog open={updateClasses} setOpen={setUpdateClasses} setFacultyData={setUserData}/>
        </div>
    )
}