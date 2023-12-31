import { useState } from 'react';
import classListData from '../../data/class.json'
import './index.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import axios from 'axios';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { MoveToTop } from '../../scrollToTop';

const StudentResources = () => {
    const Navigate = useNavigate();
    const classList = classListData.classList;
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedFaculty, setSelectedFaculty] = useState(null); //eslint-disable-line
    const [allFaculties, setAllFaculties] = useState(null);
    const handleRowClick = (className) => {
        setSelectedClass(className === selectedClass ? null : className);
    };
    const handleRowClick1 = (subjectName) => {
        setSelectedSubject(subjectName === selectedSubject ? null : subjectName);
    };
    const getFacultyList = (Item) => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_BACKEND_PORT}/getFaculty?class=${selectedClass}&subject=${Item}`).then((res)=>{
            setAllFaculties(res.data.data);
            setLoading(false);
        }).catch((err)=>{
        })
    }
    const renderTableRows = () => {
        return Object.keys(classList).map((Item, index) => (
            <tr
                key={index}
                className={Item === selectedClass ? 'selected' : ''}
                onClick={() => {
                    handleRowClick(Item);
                    MoveToTop();
                }}
                style={{ cursor: 'pointer' }}
            >
                <td style={{ margin: 0, marginBottom: "10px", padding: "0 20px 0 0" }} className='flex justify-between'>
                    <p className='Resources' style={{ paddingLeft: "20px", backgroundColor: `${index % 4 === 0 ? '#007bff' : index % 4 === 0 ? '#fd7e14' : index % 2 === 0 ? '#512da8' : '#e83e8c'}`, width: "140px", textAlign: "center", fontSize: '15px' }}>{Item}</p>
                    <OpenInNewIcon />
                </td>
            </tr>
        ));
    };

    const renderSubjectRows = () => {
        return Object.values(classList[selectedClass] || {}).map((Item, index) => (
            <tr
                key={index}
                className={Item === selectedSubject ? 'selected' : ''}
                onClick={() => {
                    handleRowClick1(Item);
                    getFacultyList(Item)
                    MoveToTop();
                }}
                style={{ cursor: 'pointer' }}
            >
                <td style={{ margin: 0, marginBottom: "10px", padding: "0 20px 0 0" }} className='flex justify-between'>
                    <p className='Resources' style={{ paddingLeft: "20px", backgroundColor: `${index % 4 === 0 ? '#007bff' : index % 4 === 0 ? '#fd7e14' : index % 2 === 0 ? '#512da8' : '#e83e8c'}`, width: "180px", textAlign: "center", fontSize: '14px' }}>{Item}</p>
                    <OpenInNewIcon />
                </td>
            </tr>
        ));
    };
    const renderFacultyData = () => {
        return allFaculties?.map((Item, index) => (
            <tr
                key={index}
                className={Item === setSelectedFaculty ? 'selected' : ''}
                onClick={() => {
                    Navigate(`/students/resources/${selectedClass}/${selectedSubject}/${Item._id}`)
                }}
                style={{ cursor: 'pointer' }}
            >
                <td style={{ margin: 0, marginBottom: "10px", padding: "0 20px 0 0" }} className='flex justify-between'>
                    <p className='Resources' style={{ paddingLeft: "20px", backgroundColor: `${index % 4 === 0 ? '#007bff' : index % 4 === 0 ? '#fd7e14' : index % 2 === 0 ? '#512da8' : '#e83e8c'}`, width: "180px", textAlign: "center", fontSize: '14px' }}>{Item.title} {Item.name}</p>
                    <OpenInNewIcon />
                </td>
            </tr>
        ));
    };

    return (
        <div>
            {
                loading && <div style={{ width: "100%", margin: "40px 0", position: "absolute", zIndex: 3 }} className='flex justify-center items-center'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress style={{ fontSize: "20px" }} />
                    </Box>
                </div>
            }
            {
                !selectedClass && <>
                    <p style={{ fontSize: "17px", textAlign: "center", marginTop: "20px" }}>Select Your Class To access relevant resources</p>
                    <div style={{ maxWidth: '600px', margin: "auto", display: "flex", justifyContent: 'center' }}>
                        <div className='table-data' style={{ margin: "40px 20px", borderRadius: "10px", boxShadow: "1px 1px 10px #ccc" }}>
                            <div className='order'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ paddingLeft: "20px", fontSize: "17px" }}>Classes</th>
                                        </tr>
                                    </thead>
                                    <tbody>{renderTableRows()}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                selectedClass && !allFaculties && <>
                    <p style={{ fontSize: "17px", textAlign: "center", marginTop: "20px" }}><ArrowBackIosIcon onClick={()=>{setSelectedClass(null)}} style={{marginRight: "10px", cursor: "pointer"}}/>  Select Subject To access relevant resources</p>
                    <div style={{ maxWidth: '600px', margin: "auto", display: "flex", justifyContent: 'center' }}>
                        <div className='table-data' style={{ margin: "40px 20px", borderRadius: "10px", boxShadow: "1px 1px 10px #ccc" }}>
                            <div className='order'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ paddingLeft: "20px", fontSize: "17px" }}>Subjects</th>
                                        </tr>
                                    </thead>
                                    <tbody>{renderSubjectRows()}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                allFaculties && allFaculties.length!==0 && <>
                <p style={{ fontSize: "17px", textAlign: "center", marginTop: "20px" }}><ArrowBackIosIcon onClick={()=>{setAllFaculties(null)}} style={{marginRight: "10px", cursor: "pointer"}}/>  Select Faculty To access relevant resources</p>
                <div style={{ maxWidth: '600px', margin: "auto", display: "flex", justifyContent: 'center' }}>
                    <div className='table-data' style={{ margin: "40px 20px", borderRadius: "10px", boxShadow: "1px 1px 10px #ccc" }}>
                        <div className='order'>
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ paddingLeft: "20px", fontSize: "17px" }}>Subjects</th>
                                    </tr>
                                </thead>
                                <tbody>{renderFacultyData()}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
            }
            {
                allFaculties && allFaculties.length===0 && <>
                <p style={{ fontSize: "17px", textAlign: "center", marginTop: "20px" }}><ArrowBackIosIcon onClick={()=>{setAllFaculties(null)}} style={{marginRight: "10px", cursor: "pointer"}}/>  Select Faculty To access relevant resources</p>
                <p style={{fontSize: "20px", textAlign: "center", marginTop: "40px"}}>No Faculty yet Registered into the system</p>
            </>
            }
        </div>
    )
}

export default StudentResources