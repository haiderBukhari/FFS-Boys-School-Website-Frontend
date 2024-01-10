import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { SuccesToast, ErrorToast } from '../../components/ReactToast';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { addUserData } from '../../Interface/userDataSlice';
import classList from '../../data/class.json'

const UploadClassesDialog = ({ open, setOpen, setFacultyData }) => {
    const userData = useSelector(state => state.userData);
    const classData = classList.classList;
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const [userDataChange, setUserDataChange] = useState({
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
        setLoading(true)
        e.preventDefault();
        const resultItem = userDataChange.assignedClasses.some((item)=>item.class==="" || !item.subjects.length)
        if(resultItem){
            ErrorToast("Fill the required fields")
            return;
        }
        // if(resultItem ==)
        const processedClasses = userDataChange.assignedClasses.reduce((accumulator, currentClass) => {
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
        setLoading(true);
        axios.patch(`${process.env.REACT_APP_BACKEND_PORT}/register/${userData.id}`, {
            facultyAssignedClasses: assignedClassesIdRemoved
        }, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("Token"),
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((res) => {
            setLoading(false);
            SuccesToast("Updated")
            Navigate('/faculty/dashboard')
            const Userdata = {
                id: res.data.data._id,
                ...res.data.data
            }
            dispatch(addUserData(Userdata));
            setFacultyData(Userdata)
            setUserDataChange({
                assignedClasses: [
                    {
                        id: Date.now(),
                        class: null,
                        subjects: []
                    }
                ]
            })
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

    useEffect(() => {
        setUserDataChange({
            assignedClasses: [
                {
                    id: Date.now(),
                    class: null,
                    subjects: []
                }
            ]
        })
    }, [open, setOpen])
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Assigned Classes Update`}</DialogTitle>
                <DialogContent>
                    <p style={{ color: "#000", margin: 0, fontSize: "14px", fontWeight: "bold" }}>Select Class and corresponding subjects in which you are teaching permanently.</p>
                    {
                        userData.assignedClasses.map((Item) => (
                            Item &&
                            <div key={Item?.id} className={`flex justify-center items-center mt-2 ${window.innerWidth < 327 && 'flex-wrap'}`}>
                                <input style={{ backgroundColor: "#eee", border: "none", marginRight: "10px", height: "36px", borderRadius: '6px', width: "120px", outline: "none", marginTop: "10px" }} type="text" placeholder={`Class ${Item?.class}`} disabled={true} />
                                <input style={{ backgroundColor: "#eee", border: "none", marginRight: "10px", height: "36px", borderRadius: '6px', width: "100%", outline: "none", marginTop: "10px" }} type="text" placeholder={`Subject ${Item?.subjects}`} disabled={true} />
                            </div>
                        ))
                    }
                    {
                        userDataChange.assignedClasses.map((Items, index) => (
                            <div key={Items.id} className={`flex justify-center items-center mt-2 ${window.innerWidth < 327 && 'flex-wrap'}`}>
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
                                <AddIcon style={{ cursor: "pointer", borderRadius: "50%", border: "1px solid #ccc", marginTop: "10px" }} onClick={HandleAdd} />
                                {
                                    index !== 0 && <CloseIcon style={{ cursor: "pointer", borderRadius: "50%", border: "1px solid #ccc", marginLeft: "10px", marginTop: "10px" }} onClick={() => { handleRemove(Items.id) }} />
                                }
                                <hr style={{ padding: "1px", color: "red" }} />
                            </div>
                        ))
                    }
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={() => { setOpen(false) }}>Close</Button>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={SubmitRegisteration} autoFocus>Update</Button>
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

export default UploadClassesDialog;