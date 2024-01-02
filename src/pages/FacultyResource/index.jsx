import React from 'react'
import { useSelector } from 'react-redux';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

export const FacultyResources = () => {
    const userData = useSelector(state => state.userData);
    const Navigate = useNavigate();
    return (
        <div>
            <div style={{margin: "0 15px"}}>
                <h1 style={{ textAlign: 'center', fontSize: "20px", margin: "20px", fontFamily: "sans-serif" }}>Hello <span style={{ fontSize: "30px", paddingRight: "10px" }}>👋</span> {userData.title} {userData.name} </h1>
                <p style={{ textAlign: "center", fontSize: "16px", marginTop: "20px" }}>Respected Faculties! You can manage students materials, records and homework here!</p>
                <div className='flex justify-center items-center flex-wrap'>
                    {
                        userData?.assignedClasses?.map((Item)=>(
                            Item?.subjects?.map((subject)=>(
                                <div style={{ fontSize: "15px", fontFamily: "sans-serif", margin: "40px 20px 20px", boxShadow: "0px 0px 10px #ccc", borderRadius: "6px", width: "300px", height: "200px", border: "1px solid #ccc", position: "relative" }}>
                                    <h1 className='font-semibold' style={{ fontSize: "20px", padding: "20px", }}><span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Class:</span> <span style={{ paddingLeft: "10px", fontSize: "18px", color: "grey" }}>{Item.class}</span></h1>
                                    <h1 className='font-semibold' style={{ fontSize: "18px", padding: "10px 20px 20px 20px" }}><span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Subject: </span><span style={{ paddingLeft: "10px", fontSize: "16px", color: "red" }}>{subject}</span></h1>
                                    <button onClick={()=>{
                                        Navigate(`/faculty/upload/resources/${Item.class}/${subject}/${userData.id}`)
                                    }} style={{ position: "absolute", bottom: '10px', right: '20px', padding: "7px 30px", backgroundColor: 'rgb(26, 118, 209)', color: "#fff", borderRadius: "6px" }}>Manage Resources <ArrowForwardIcon style={{ color: "#fff", paddingLeft: "5px", fontSize: "30px" }} /> </button>
                                </div>
                            ))
                        ))
                    }
                </div>
            </div>
        </div>
    )
}