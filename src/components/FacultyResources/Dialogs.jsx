import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'
import { SuccesToast, ErrorToast } from './../ReactToast';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

export function DeleteAlertDialog({ open, setOpen, selectedData, facultyId, subject, Facultyclass, setSelectedData, setFetchAgain, fetchAgain, setLoading }) {

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setLoading(true)
        axios.delete(`${process.env.REACT_APP_BACKEND_PORT}/faculty/${facultyId}/${subject}/${Facultyclass}/${selectedData._id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("Token"),
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            SuccesToast("Successfully Deleted")
            setFetchAgain(!fetchAgain)
        }).catch(err => {
            ErrorToast(err.response.data.message);
        });
        setLoading(false)
        setSelectedData({});
        handleClose();
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Material Delete Confirmation?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ar you sure you want to delete. Deleted Material will not be recovered later on.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: "rgba(0, 140, 0, 0.7)", color: "#fff", padding: "5px 10px" }} onClick={handleClose}>No Close</Button>
                    <Button style={{ backgroundColor: "rgba(255, 0, 0, 0.7)", color: "#fff", padding: "6px 10px" }} onClick={handleDelete} autoFocus>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}


export const EditAlertDialog = ({ open, setOpen, selectedData, facultyId, subject, Facultyclass, setSelectedData, setFetchAgain, fetchAgain, setLoading }) => {
    const [title, setTitle] = useState(selectedData.title);
    const [description, setDescription] = useState(selectedData.description);
    const [link, setLink] = useState(selectedData.link);
    const [FacultyData, setFacultyData] = useState(useSelector(state => state.userData)) //eslint-disable-line

    useEffect(() => {
        setTitle(selectedData.title);
        setDescription(selectedData.description);
        setLink(selectedData.link);
    }, [selectedData])

    const handleAgree = () => {
        setLoading(true)
        axios.delete(`${process.env.REACT_APP_BACKEND_PORT}/faculty/${facultyId}/${subject}/${Facultyclass}/${selectedData._id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("Token"),
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            axios.post(`${process.env.REACT_APP_BACKEND_PORT}/faculty`, {
                facultyId: facultyId,
                subject: subject,
                class: Facultyclass,
                name: FacultyData.name,
                Facultytitle: FacultyData.title,
                title: title,
                link: link,
                description: description,
                isMeetingLink: selectedData.isMeetingLink,
                isLink: selectedData.isLink,
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("Token"),
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then((data) => {
                setLoading(false);
                setTitle("");
                setLink("");
                setDescription("");
                SuccesToast("Updated")
                setFetchAgain(!fetchAgain);
            }).catch((err) => {
                setLoading(false);
                ErrorToast("Error");
            });
        }).catch(err => {
            setLoading(false);
            ErrorToast(err.response.data.message);
        });
        setSelectedData({});
        setOpen(false)
    }
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Class ${Facultyclass} (${subject}) Material Edit`}</DialogTitle>
                <DialogContent>
                    <div className='flex justify-center items-center'>
                        <p style={{ textAlign: "center" }}>{selectedData.isMeetingLink ? 'Meeting Link' : 'Other (Youtube/ Google Links)'}</p>
                    </div>
                    <TextField
                        label="Link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        multiline
                        rows={1}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        multiline
                        rows={1}
                        fullWidth
                        margin="normal"
                    />
                    {
                        !selectedData.isMeetingLink &&
                        <TextField
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={3}
                            fullWidth
                            margin="normal"
                        />
                    }
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={() => { setOpen(false) }}>Close</Button>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={handleAgree} autoFocus>Update</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}