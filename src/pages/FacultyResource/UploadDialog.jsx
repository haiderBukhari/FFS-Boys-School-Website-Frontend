import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { SuccesToast, ErrorToast } from '../../components/ReactToast';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const UploadDialog = ({ open, setOpen, id, subject, Facultyclass, fetchAgain, setFetchAgain }) => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [isDrive, setIsDrive] = useState('');
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const Navigate = useNavigate();
    const facultyId = useSelector(state => state.userData.id);
    const facultyName = useSelector(state => state.userData.name);
    const facultyTitle = useSelector(state => state.userData.title);

    if (facultyId !== id) {
        Navigate('/error');
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleAgree = () => {
        if ((!title && isDrive !== 'meeting') || (!link && isDrive !== 'link') || (!file && (isDrive === 'video' || isDrive === 'document'))) {
            ErrorToast("Please fill all the fields");
        } else {
            setLoading(true);
            if (isDrive === 'meeting' || isDrive === 'link') {
                const todayDate = new Date().toISOString().slice(0, 10);
                axios.post(`${process.env.REACT_APP_BACKEND_PORT}/faculty`, {
                    facultyId: id,
                    subject: subject,
                    class: Facultyclass,
                    name: facultyName,
                    facultytitle: facultyTitle,
                    title: `Meeting Link ${todayDate}`,
                    link: link,
                    description: description,
                    isMeetingLink: isDrive === 'meeting' ? true : false,
                    isLink: isDrive === 'link' ? true : false
                } , {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("Token"),
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                }).then((data) => {
                    setLoading(false);
                    setTitle('');
                    setLink('');
                    setDescription('');
                    setIsDrive('');
                    setFile(null);
                    SuccesToast("Uploaded");
                    setFetchAgain(!fetchAgain);
                    setOpen(false);
                }).catch((err) => {
                    setLoading(false);
                    ErrorToast("Error");
                });
            } else if (false) {
                const formData = new FormData();
                formData.append('facultyId', id);
                formData.append('subject', subject);
                formData.append('class', Facultyclass);
                formData.append('name', facultyName);
                formData.append('Facultytitle', facultyTitle);
                formData.append('title', title);
                formData.append('description', description);
                formData.append('isDriveData', isDrive === 'link' ? false : true);
                if (file) formData.append('file', file);
                if (link) formData.append('link', link);
                axios.post(`${process.env.REACT_APP_BACKEND_PORT}/faculty/video`, formData, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("Token"),
                        "Content-Type": "multipart/form-data",
                        "Accept": "application/json"
                    }
                }).then((data) => {
                    setLoading(false);
                    setTitle('');
                    setLink('');
                    setDescription('');
                    setIsDrive('');
                    setFile(null);
                    SuccesToast("Uploaded");
                    setFetchAgain(!fetchAgain);
                    setOpen(false);
                }).catch((err) => {
                    setLoading(false);
                    ErrorToast("Error");
                });
            }
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
                <DialogTitle id="alert-dialog-title">{`Class ${Facultyclass} (${subject}) Material Upload`}</DialogTitle>
                <DialogContent>
                    <div className='flex justify-center items-center'>
                        <select onChange={(e) => { setIsDrive(e.target.value); setFile(null) }} style={{ border: "1px solid #ccc", height: "36px", borderRadius: '6px', width: "140px", outline: "none" }}>
                            <option value="" disabled selected>Upload Source</option>
                            <option value='video' key="">Video</option>
                            <option value='document' key="">Documents</option>
                            <option value='meeting' key="">Meeting Link</option>
                            <option value='link' key="">Youtube Links</option>
                        </select>
                    </div>
                    {(isDrive === 'video' || isDrive === 'document') && (
                        <div className='w-full'>
                            <TextField
                                label="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                multiline
                                rows={1}
                                fullWidth
                                margin="normal"
                            />
                            <input
                                type="file"
                                accept={isDrive === 'video' ? 'video/*' : 'application/pdf,application/msword'}
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                            <Button
                                variant="contained"
                                onClick={() => fileInputRef.current.click()}
                                style={{ backgroundColor: '#1A76D1', color: '#fff', margin: '20px auto' }}
                            >
                                Choose File
                            </Button>
                            {file && <p className='text-center'>{file.name.slice(0, 50)}...</p>}
                        </div>
                    )}
                    {isDrive === 'link' && (
                        <>
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
                        </>
                    )}
                    {isDrive === 'meeting' && (
                        <>
                            <TextField
                                label="Link"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                multiline
                                rows={1}
                                fullWidth
                                margin="normal"
                            />
                        </>
                    )}
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
