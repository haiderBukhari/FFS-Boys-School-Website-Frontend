import React, { useState } from 'react'
import './index.css'
import poor from "../../assets/emojis/poor.png"
import bad from "../../assets/emojis/bad.png"
import okay from "../../assets/emojis/okay.png"
import good from "../../assets/emojis/good.png"
import excellent from "../../assets/emojis/excellent.png"
import StarIcon from '@mui/icons-material/Star';
import { SuccesToast, ErrorToast } from '../ReactToast'
import axios from 'axios';
import { useSelector } from "react-redux"

const Feedback = () => {
    const [colors, setColors] = useState(['e4e4e4', 'e4e4e4', 'e4e4e4', 'e4e4e4', 'e4e4e4'])
    const [tranform, setTranform] = useState([false, false, false, false, false])
    const [rating, setRating] = useState(null);
    const [message, setMessage] = useState("");
    const [FacultyName, setFacultyName] = useState(useSelector(state => state.userData.name)); //eslint-disable-line
    const submitFeedback = () => {
        if (!rating) {
            return ErrorToast("Please Select Rating");
        }
        else if (!message) {
            return ErrorToast("Please write Feedback");
        }
        axios.post(`${process.env.REACT_APP_BACKEND_PORT}/feedback`, {
            rating,
            facultyName: FacultyName,
            message
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res)=>{
            SuccesToast("Feedback Submitted Successfully")
        }).catch((err)=>{
            ErrorToast("Error in Sending Feedback")
        });
    }
    return (
        <div style={{ margin: "10px 20px" }}>
            <div className='feedback-container'>
                <div className='feedback-sub-container'>
                    <div className='feedbackbox'>
                        <div className='emoji'>
                            <div style={{ transform: `${tranform[0] ? 'translateX(0)' : tranform[1] ? 'translateX(-100px)' : tranform[2] ? 'translateX(-200px)' : tranform[3] ? 'translateX(-300px)' : "translateX(-400px)"}` }} id='emoji'>
                                <img src={poor} alt="" />
                                <img src={bad} alt="" />
                                <img src={okay} alt="" />
                                <img src={good} alt="" />
                                <img src={excellent} alt="" />
                            </div>
                        </div>
                        <div className='rating'>
                            <StarIcon onClick={() => {
                                setColors(['#ffd93b', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4']); setTranform([true, false, false, false, false]); setRating(1);
                            }} style={{ color: `${colors[0]}` }} className='fas-stars' />
                            <StarIcon onClick={() => {
                                setColors(['#e4e4e4', '#ffd93b', '#e4e4e4', '#e4e4e4', '#e4e4e4']); setTranform([false, true, false, false, false]); setRating(2);
                            }} style={{ color: `${colors[1]}` }} className='fas-stars' />
                            <StarIcon onClick={() => {
                                setColors(['#e4e4e4', '#e4e4e4', '#ffd93b', '#e4e4e4', '#e4e4e4']); setTranform([false, false, true, false, false]); setRating(3);
                            }} style={{ color: `${colors[2]}` }} className='fas-stars' />
                            <StarIcon onClick={() => {
                                setColors(['#e4e4e4', '#e4e4e4', '#e4e4e4', '#ffd93b', '#e4e4e4']); setTranform([false, false, false, true, false]); setRating(4);
                            }} style={{ color: `${colors[3]}` }} className='fas-stars' />
                            <StarIcon onClick={() => {
                                setColors(['#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#ffd93b']); setTranform([false, false, false, false, true]); setRating(5);
                            }} style={{ color: `${colors[4]}` }} className='fas-stars' />
                        </div>
                        <textarea className='text-area-1' onChange={(e) => { setMessage(e.target.value) }} rows="4" style={{ marginTop: "20px", outline: "1px solid #ccc", padding: "10px" }} value={message || ""} placeholder='Feedback...'></textarea>
                        <div className='feedback-button'>
                            <button onClick={submitFeedback}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback