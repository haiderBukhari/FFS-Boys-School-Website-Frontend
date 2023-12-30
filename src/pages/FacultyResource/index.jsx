import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const FacultyResources = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);
    const [selected, setSelected] = useState(null);
    console.log(userData)
    return (
        <div>
            <div>
                <h1 style={{ textAlign: 'center', fontSize: "20px", margin: "20px", fontFamily: "sans-serif" }}>Hello <span style={{ fontSize: "30px", paddingRight: "10px" }}>👋</span> {userData.title} {userData.name} </h1>
                <p style={{ textAlign: "center", fontSize: "16px", marginTop: "20px" }}>Respected Faculties! You can manage students materials, records and homework here!</p>
                <div className='flex justify-center items-center flex-wrap'>
                    {
                        userData?.assignedClasses?.map((Item)=>(
                            Item?.subjects?.map((subject)=>(
                                <div style={{ fontSize: "15px", fontFamily: "sans-serif", margin: "20px", boxShadow: "0px 0px 10px #ccc", borderRadius: "6px", width: "300px", height: "200px", border: "1px solid #ccc", position: "relative" }}>
                                    <h1 style={{ fontSize: "20px", padding: "20px", }}><span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Class:</span> <span style={{ paddingLeft: "10px" }}>{Item.class}</span></h1>
                                    <h1 style={{ fontSize: "20px", padding: "10px 20px 20px 20px" }}><span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Subject: </span><span style={{ paddingLeft: "10px" }}>{subject}</span></h1>
                                    <button onClick={()=>{setSelected({
                                        class: Item.class,
                                        subject: subject
                                    })}} style={{ position: "absolute", bottom: '10px', right: '20px', padding: "7px 30px", backgroundColor: 'rgb(26, 118, 209)', color: "#fff", borderRadius: "6px" }}>Access Resources <ArrowForwardIcon style={{ color: "#fff", paddingLeft: "5px", fontSize: "30px" }} /> </button>
                                </div>
                            ))
                        ))
                    }
                </div>
            </div>
        </div>
    )
}