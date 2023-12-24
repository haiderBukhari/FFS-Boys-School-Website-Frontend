import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import axios from "axios";
import ContactResponseDialog from './ResponseModel';

const ContactResponses = () => {
    const [viewed, setViewed] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const [pagination, setPagination] = useState({ //eslint-disable-line
        page: 1,
        rowsPerPage: 10,
    });
    const handleChange = (event) => {
        setViewed(event.target.value);
    };
    const [ContactData, setContactData] = useState(null);

    const getContactData = () => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_BACKEND_PORT}/contact?page=${pagination.page}&limit=${pagination.rowsPerPage}&viewed=${viewed}`).then(res => {
            console.log(res.data.data)
            setContactData(res.data.data);
        }).catch(err => alert(err.message))
        setLoading(false);
    }

    const updateContactData = (id) => {
        axios.patch(`${process.env.REACT_APP_BACKEND_PORT}/contact`, { id }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => getContactData());
    }

    const DeleteContactData = (id) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_PORT}/contact`, {id}, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => getContactData());
    }

    useEffect(() => {
        getContactData();
        //eslint-disable-next-line
    }, [viewed])
    return (
        <>

            <div className='flex justify-center'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={viewed}
                            label="Status"
                            onChange={handleChange}
                            style={{ width: "200px" }}
                        >
                            <MenuItem selected={viewed === true ? true : false} value={true}>Viewed</MenuItem>
                            <MenuItem selected={viewed === false ? true : false} value={false}>Not Viewed</MenuItem>
                            <MenuItem selected={viewed === "" ? true : false} value={""}>Default</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            {
                ContactData && <div className='flex flex-col items-center justify-center mt-4'>
                    <div className='flex text-current items-center'>
                        <button style={{ padding: "10px", borderRadius: "50%", backgroundColor:'#9df28a' }}></button>
                        <p className='ml-2' style={{fontSize: '16px'}}>Already Viewed Message</p>
                    </div>
                    <div className='flex text-current items-center mt-2'>
                        <button style={{ padding: "10px", borderRadius: "50%", backgroundColor:'#f09e81' }}></button>
                        <p className='ml-2' style={{fontSize: '16px'}}>Viewed Pending</p>
                    </div>
                </div>
            }
            <div style={{ margin: '20px 20px 0 20px' }} className='flex justify-center flex-wrap'>
                {
                    ContactData?.map((item) => (
                        <div key={item._id} style={{margin: '20px', padding: '20px 10px 20px 20px', backgroundColor: `${item.viewed ? '#9df28a' : '#f09e81'}`, maxWidth: "390px", minWidth: "300px", borderRadius: '8px' }}>
                            <button disabled={true} style={{ backgroundColor: '#0688cf', color: "#fff", padding: '5px 10px', marginBottom: '10px', borderRadius: '30px' }}>{item.date && String(item.date).slice(0, 10)}</button>
                            <button></button>
                            <h1 className='mt-1'><span style={{ fontSize: "19px", fontWeight: 'bold' }}>Name</span>: <span style={{ marginLeft: '4px', fontSize: '17px' }}>{item.name}</span></h1>
                            <h1 className='mt-4'><span style={{ fontSize: "19px", fontWeight: 'bold' }}>Email</span>: <span style={{ marginLeft: '4px', fontSize: '17px' }}>{item.email}</span></h1>
                            <h1 className='mt-4'><span style={{ fontSize: "19px", fontWeight: 'bold' }}>PhoneNumber</span>: <span style={{ marginLeft: '4px', fontSize: '17px' }}>{item.phone}</span></h1>
                            <button onClick={() => { setSelectedData(item); setOpen(true); !viewed && updateContactData(item._id); }} style={{ padding: '10px 15px', margin: '20px 0 0 0', backgroundColor: '#0688cf', color: "#fff", borderRadius: '8px' }}>View Message</button>
                            {
                                item.viewed && <button onClick={()=>{DeleteContactData(item._id)}} style={{ padding: '10px 15px', margin: '20px 0 0 10px', backgroundColor: '#f24141', color: "#fff", borderRadius: '8px' }}>Delete Response</button>
                            }
                        </div>
                    ))
                }
                {
                    loading && <p>Loading...</p>
                }
                <ContactResponseDialog open={open} setOpen={setOpen} data={selectedData} />
            </div>
        </>
    )
}

export default ContactResponses