import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { SuccesToast, ErrorToast } from '../../components/ReactToast';
import axios from "axios"
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const UploadDialog = ({ open, setOpen, id, subject, Facultyclass, fetchAgain, setFetchAgain }) => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [isDrive, setIsDrive] = useState(false);
    const [drive, setDrive] = useState(false);
    const Navigate = useNavigate();
    const facultyId = useSelector(state=>state.userData.id);
    const facultyName = useSelector(state=>state.userData.name);
    const facultyTitle = useSelector(state=>state.userData.title);

    if(facultyId !== id){
        Navigate('/error');
    }
    const handleAgree = () => {
        if (!title || !description || !link || !drive) {
            ErrorToast("Please Fill all the Fields")
        }
        else {
            setLoading(true);
            axios.post(`${process.env.REACT_APP_BACKEND_PORT}/faculty`, {
                facultyId: id,
                subject: subject,
                class: Facultyclass,
                name: facultyName,
                Facultytitle: facultyTitle,
                title: title,
                link: link,
                description: description,
                isDriveData: isDrive
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("Token"),
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then((data)=>{
                setLoading(false);
                setTitle("");
                setLink("");
                setDescription("");
                setIsDrive(false);
                SuccesToast("Uploaded")
                setFetchAgain(!fetchAgain);
            }).catch((err)=>{
                setLoading(false);
                ErrorToast("Error");
            });
            setOpen(false);
        }
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Class ${Facultyclass} (${subject}) Material Uplaod`}</DialogTitle>
                <DialogContent>
                    <div className='flex justify-center items-center'>
                        <select onChange={(e) => {
                            setIsDrive(e.target.value);
                            setDrive(true);
                        }} style={{ border: "1px solid #ccc", height: "36px", borderRadius: '6px', width: "140px", outline: "none" }}>
                            <option value="" disabled selected>Upload Source</option>
                            <option value={true} key="">Google Drive</option>
                            <option value={false} key="">Other (Youtube/ Google Links)</option>
                        </select>
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
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={3}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={() => { setOpen(false) }}>Close</Button>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={handleAgree} autoFocus>Upload</Button>
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

export default UploadDialog;
