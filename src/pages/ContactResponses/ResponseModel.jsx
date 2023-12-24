import { Fragment } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContactResponseDialog({ open, setOpen, data }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <h1 style={{ fontFamily: "sans-serif", margin: '10px 0', fontWeight: 'bold' }}>Contact Us Detail</h1>
                    <hr style={{ color: '#000', padding: '0.2px' }} />
                </DialogTitle>
                <p style={{margin: '10px 20px', fontSize: '17px', lineHeight: '2.0rem'}}>The Detail of the Contactee Name, Email, Contact Number, Date of the contact and Message is written</p>
                <div style={{margin: '10px 20px'}}>
                    <button disabled={true} style={{ backgroundColor: '#0688cf', color: "#fff", padding: '5px 10px', marginBottom: '10px', borderRadius: '30px' }}>Date:   {data.date && String(data.date).slice(0, 10)}</button>
                    <button></button>
                    <h1 className='mt-1'><span style={{ fontSize: "19px", fontWeight: 'bold' }}>Name</span>: <span style={{ marginLeft: '4px', fontSize: '17px' }}>{data.name}</span></h1>
                    <h1 className='mt-4'><span style={{ fontSize: "19px", fontWeight: 'bold' }}>Email</span>: <span style={{ marginLeft: '4px', fontSize: '17px' }}>{data.email}</span></h1>
                    <h1 className='mt-4'><span style={{ fontSize: "19px", fontWeight: 'bold' }}>PhoneNumber</span>: <span style={{ marginLeft: '4px', fontSize: '17px' }}>{data.phone}</span></h1>
                    <h1 className='mt-3 mb-4'><span style={{ fontSize: "19px", fontWeight: 'bold' }}>Message</span>: <span style={{ marginLeft: '4px', fontSize: '17px', lineHeight: '2.0rem' }}>{data.message}</span></h1>
                </div>
                <DialogActions>
                    <Button style={{backgroundColor: '#0688cf', color: '#fff', fontSize: "12px"}} onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}