import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { SuccesToast, ErrorToast } from '../../components/ReactToast';
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import classList from '../../data/class.json'
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { addUserData } from '../../Interface/userDataSlice';

const ClassModel = ({ open, setOpen }) => {
    const classData = classList.classList;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);
    const [userDataChange, setUserDataChange] = useState({
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
        setUserDataChange((prevData) => ({
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
        const prevData = { ...userDataChange };
        const updatedClasses = prevData.assignedClasses.filter((item) => item.id !== id);
        setUserDataChange({ ...prevData, assignedClasses: updatedClasses });
    };
    const SubmitRegisteration = (e) => {
        e.preventDefault();
        if (!userDataChange.contactNumber) {
            return ErrorToast("Please Fill All Fields")
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

        const assignedClassesIdRemoved = processedClasses.map((Items) => {
            return { class: Items.class, subjects: Items.subjects }
        })
        const FinalData = { ...userDataChange, assignedClasses: assignedClassesIdRemoved };
        console.log(FinalData);
        setLoading(true);
        axios.patch(`${process.env.REACT_APP_BACKEND_PORT}/register`, {
            id: userData.id,
            contactNumber: userDataChange.contactNumber,
            assignedClasses: userDataChange.assignedClasses,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((res) => {
            setLoading(false);
            const Userdata = {
                id: res.data.data._id,
                ...res.data.data
            }
            dispatch(addUserData(Userdata));
            SuccesToast("Profile Updated")
        }).catch((err) => {
            setLoading(false);
            ErrorToast("Error");
        });
        setOpen(false);
    }
    const handleClassChange = (e, itemId) => {
        const selectedClass = e.target.value;
        setUserDataChange((prevData) => {
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
        setUserDataChange((prevData) => {
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
        <React.Fragment>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Personal and Class Information"}</DialogTitle>
                <DialogContent>
                    <div className='flex justify-center items-center'>
                    </div>
                    <p style={{ fontSize: "16px" }}>Kindly specify authentic information and you will not be able to update again.</p>
                    <TextField
                        label="Contact Number"
                        type="number"
                        value={userDataChange.contactNumber}
                        onChange={(e) => {
                            setUserDataChange((prevData) => ({
                                ...prevData,
                                contactNumber: e.target.value
                            }))
                        }}
                        rows={1}
                        fullWidth
                        margin="normal"
                    />
                    <p style={{ color: "#000", margin: 0, fontSize: "14px", fontWeight: "bold" }}>Select Class and corresponding subjects in which you are teaching permanently.</p>
                    {
                        userDataChange.assignedClasses.map((Items, index) => (
                            <div key={Items.id} className={`flex justify-center items-center mt-2 ${window.innerWidth<327 && 'flex-wrap' }`}>
                                <select
                                    onChange={(e) => handleClassChange(e, Items.id)}
                                    style={{ backgroundColor: "#eee", border: "none", marginRight: "10px", height: "36px", borderRadius: '6px', width: "170px", outline: "none", marginTop: "10px" }}
                                >
                                    <option value="" disabled selected>Class</option>
                                    {Object.keys(classData).map((ItemList, index) => (
                                        <option value={`${ItemList}`} key={ItemList}>{ItemList}</option>
                                    ))}
                                </select>

                                <select onChange={(e) => { handleSubjectChange(e, Items.id) }} style={{ backgroundColor: "#eee", border: "none", marginRight: "10px", height: "36px", borderRadius: '6px', width: "100%", outline: "none", marginTop: "10px" }}>
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
                                <AddIcon style={{ cursor: "pointer", borderRadius: "50%", border: "1px solid #ccc",  marginTop: "10px" }} onClick={HandleAdd} />
                                {
                                    index !== 0 && <CloseIcon style={{ cursor: "pointer", borderRadius: "50%", border: "1px solid #ccc", marginLeft: "10px",  marginTop: "10px" }} onClick={() => { handleRemove(Items.id) }} />
                                }
                                <hr style={{padding: "1px", color: "red"}}/>
                            </div>
                        ))
                    }
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={() => { setOpen(false) }}>Close</Button>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={SubmitRegisteration }>Update</Button>
                </DialogActions>
            </Dialog>
            {
                loading && <div style={{ width: "100%", margin: "40px 0" }} className='flex justify-center items-center'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress style={{ fontSize: "20px" }} />
                    </Box>
                </div>
            }
        </React.Fragment>
    );
};

export default ClassModel;