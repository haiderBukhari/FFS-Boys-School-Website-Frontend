import React, { useState } from 'react';
import './Login.css'
import classList from '../../data/class.json'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"
import { SuccesToast, ErrorToast } from './../ReactToast';

const Register = () => {
    const classData = classList.classList;
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        title: "",
        password: "",
        contactNumber: "",
        assignedClasses: [
            {
                id: Date.now(),
                class: null,
                subjects: []
            }
        ]
    });
    const HandleAdd = () => {
        setUserData((prevData) => ({
            ...prevData,
            assignedClasses: [
                ...prevData.assignedClasses,
                {
                    id: Date.now(),
                    class: "",
                    subjects: []
                }
            ]
        }));
    };

    const handleRemove = (id) => {
        const prevData = { ...userData };
        console.log("prev", prevData.assignedClasses);
        const updatedClasses = prevData.assignedClasses.filter((item) => item.id !== id);
        console.log("new", updatedClasses);
        setUserData({ ...prevData, assignedClasses: updatedClasses });
    };
    const SubmitRegisteration = (e) => {
        e.preventDefault();
        if(userData.email === "" || userData.password === "" || userData.name === "" || userData.title==="" || userData.contactNumber ==="") {
            ErrorToast("Please Fill All Fields")
        }
        const processedClasses = userData.assignedClasses.reduce((accumulator, currentClass) => {
            const existingClass = accumulator.find((item) => item.class === currentClass.class);

            if (existingClass) {
                existingClass.subjects = [...new Set([...existingClass.subjects, ...currentClass.subjects])];
            } else {
                accumulator.push({ ...currentClass });
            }
            return accumulator;
        }, []);

        const assignedClassesIdRemoved = processedClasses.map((Items)=>{
            return {class:Items.class, subjects: Items.subjects}
        }) 
        const FinalData = {...userData, assignedClasses: assignedClassesIdRemoved};
        console.log(FinalData);
        axios.post(`${process.env.REACT_APP_BACKEND_PORT}/register`, FinalData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res=>SuccesToast("Accessed Given Successfully")).catch(err=>ErrorToast("Error in Giving Access"));
    }
    const handleClassChange = (e, itemId) => {
        const selectedClass = e.target.value;
        setUserData((prevData) => {
            const updatedClasses = prevData.assignedClasses.map((item) => {
                if (item.id === itemId) {
                    return { ...item, class: selectedClass };
                }
                return item;
            });
            return { ...prevData, assignedClasses: updatedClasses };
        });
    };
    const handleSubjectChange = (e, itemId) => {
        const selectedSubject = e.target.value;
        setUserData((prevData) => {
            const updatedClasses = prevData.assignedClasses.map((item) => {
                if (item.id === itemId) {
                    return { ...item, subjects: [selectedSubject] };
                }
                return item;
            });
            return { ...prevData, assignedClasses: updatedClasses };
        });
    };

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
                                <option value="Mrs" key="">Mrs</option>
                            </select>
                            <input onChange={(e) => {
                                setUserData((prevData) => ({
                                    ...prevData,
                                    name: e.target.value
                                }))
                            }} style={{ width: "100%" }} type="text" placeholder="Full Name" />
                        </div>
                        <input onChange={(e) => {
                            setUserData((prevData) => ({
                                ...prevData,
                                email: e.target.value
                            }))
                        }} type="email" placeholder="Email" />
                        <input onChange={(e) => {
                            setUserData((prevData) => ({
                                ...prevData,
                                password: e.target.value
                            }))
                        }} type="password" placeholder="Password" />
                        <input onChange={(e) => {
                            setUserData((prevData) => ({
                                ...prevData,
                                contactNumber: e.target.value
                            }))
                        }} type="text" placeholder="Contact Number" />
                        <p style={{ color: "#000", margin: 0, fontSize: "14px", fontWeight: "bold" }}>Assign Classes</p>
                        {
                            userData.assignedClasses.map((Items, index) => (
                                <div key={Items.id} className='flex justify-center items-center mt-2'>
                                    <select
                                        onChange={(e) => handleClassChange(e, Items.id)}
                                        style={{ backgroundColor: "#eee", border: "none", marginRight: "10px", height: "36px", borderRadius: '6px', width: "170px", outline: "none" }}
                                    >
                                        <option value="" disabled selected>Class</option>
                                        {Object.keys(classData).map((ItemList, index) => (
                                            <option value={`${ItemList}`} key={ItemList}>{ItemList}</option>
                                        ))}
                                    </select>

                                    <select onChange={(e)=>{handleSubjectChange(e, Items.id)}} style={{ backgroundColor: "#eee", border: "none", marginRight: "10px", height: "36px", borderRadius: '6px', width: "100%", outline: "none" }}>
                                        <option value="" disabled selected>Subject</option>
                                        {
                                            Items.class !== null && (
                                                <>
                                                    {Object.values(classData[Items.class] || {}).map((ItemList) => (
                                                        <option value={ItemList} key={ItemList + 90}>{ItemList}</option>
                                                    ))}
                                                </>
                                            )
                                        }
                                    </select>
                                    <AddIcon style={{ cursor: "pointer", borderRadius: "50%", border: "1px solid #ccc" }} onClick={HandleAdd} />
                                    {
                                        index !== 0 && <CloseIcon style={{ cursor: "pointer", borderRadius: "50%", border: "1px solid #ccc", marginLeft: "10px" }} onClick={() => { handleRemove(Items.id) }} />
                                    }
                                </div>
                            ))
                        }
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