import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AdmissionAdd from '../assets/img/admissionadd.jpeg'
import TenderNoticeFFSBOYS from '../assets/tender.jpeg'


const HomeNotificationDialog = ({ open, setOpen }) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"FFS BOYS WAH NOTIFICATIONS 🔔"}
                </DialogTitle>
                <DialogContent>
                    <div className='flex flex-col'>
                        {/* <a href="/prize/ceremony" style={{ fontSize: "17px", color: 'blue', margin: "0 0 15px 0" }}>👉 Annual Prize Distribution Ceremony 2024</a> */}
                        <a href="/courses/web-development" style={{ fontSize: "17px", color: 'blue', margin: "0 0 15px 0" }}>👉 Website Development Course</a>
                    </div>
                    {/* <hr/> */}
                    <img style={{ height: "300px", margin: "20px 0 0 0 " }} src={TenderNoticeFFSBOYS} alt="tender notice ffs boys wah" loading="lazy" />
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: "rgba(0, 0 , 255, 0.6)", color: "#fff" }} onClick={() => { setOpen(false) }}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default HomeNotificationDialog;