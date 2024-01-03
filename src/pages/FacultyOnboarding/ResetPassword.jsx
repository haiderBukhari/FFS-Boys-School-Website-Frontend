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
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { addUserData } from '../../Interface/userDataSlice';

const ResetPassword = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);
    const handleAgree = () => {
        setLoading(true);
        axios.patch(`${process.env.REACT_APP_BACKEND_PORT}/register`, {
            id: userData.id,
            password: password
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
            SuccesToast("Password Updated")
        }).catch((err) => {
            setLoading(false);
            ErrorToast("Error");
        });
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Password Change"}</DialogTitle>
                <DialogContent>
                    <div className='flex justify-center items-center'>
                    </div>
                    <p style={{ fontSize: "16px" }}>Create a strong password to protect your resources and enhance security.</p>
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        rows={1}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        value={cpassword}
                        onChange={(e) => setCPassword(e.target.value)}
                        rows={1}
                        fullWidth
                        margin="normal"
                        helperText="Use at least 8 characters, including uppercase letters, numbers, and special characters."
                    />
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={() => { setOpen(false) }}>Close</Button>
                    <Button style={{ backgroundColor: '#1A76D1', color: '#fff', width: '100px', textAlign: 'center', margin: '3px 4px', padding: '4px 6px', borderRadius: "6px" }} onClick={() => { handleAgree() }}>Update</Button>
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

export default ResetPassword;