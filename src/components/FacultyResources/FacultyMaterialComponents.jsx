import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
import './material.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const FacultyMaterialComponents = ({ id, subject, Facultyclass, fetchAgain }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({
        status: false,
        message: ""
    });
    const [search, setSearch] = useState(""); //eslint-disable-line
    const [pdfLinks, setPdfLinks] = useState(null);
    const FetchFacultyData = async () => {
        axios.get(`${process.env.REACT_APP_BACKEND_PORT}/faculty`, {
            params: {
                facultyId: id,
                subject: subject,
                class: Facultyclass
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            setPdfLinks(res.data.FacultyData.link)
            setLoading(false);
        }).catch(err => {
            setError({
                status: true,
                message: err.response.data.error
            });
        })
    }
    useEffect(() => {
        FetchFacultyData();
    }, [fetchAgain]) //eslint-disable-line

    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        setIsActive(true);
        if (inputValue !== '') {
            // Update your search result or perform any other action here
            // For now, let's just log the message
            console.log(`You just typed: ${inputValue}`);
        }
    };

    const handleCancel = () => {
        setIsActive(false);
        setInputValue('');
    };


    function getViewLinkDirect(link) {
        const match = link.match(/\/file\/d\/(.+?)\/(?:view|edit)/);
        return match ? `https://drive.google.com/uc?id=${match[1]}` : link;
    }

    function openDirectLink(link) {
        const directLink = getViewLinkDirect(link);
        window.open(directLink, '_blank');
    }

    function OpeninBrowser(link) {
        window.open(link, '_blank');
    }
    return (
        <div>
            {
                !error.status && pdfLinks && <>
                    <div style={{ display: "flex", justifyContent: "center", margin: "10px auto 30px auto" }} className={`search-box ${isActive ? 'active' : ''}`}>
                        <input
                            type="text"
                            placeholder="Type to search.."
                            className={isActive ? 'active' : ''}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className={`search-icon ${isActive ? 'active' : ''}`} onClick={handleSearch}>
                            <i className="fas fa-search"></i>
                        </div>
                        <div className={`cancel-icon ${isActive ? 'active' : ''}`} onClick={handleCancel}>
                            <CloseIcon className="fas fa-times" style={{ color: "#000", fontSize: "30px" }} />
                        </div>
                        <div className="search-data"></div>
                    </div>
                    <div className='flex items-center flex-wrap justify-center'>
                        {pdfLinks.map((Items, index) => (
                            <div key={index + 1097} style={{ margin: '20px', maxWidth: "350px", minWidth: "200px", width: "100%" }}>
                                <div style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", padding: "20px 10px", borderRadius: "8px", position: "relative" }}>
                                    <div className="date" style={{ backgroundColor: '#1A76D1', color: '#fff', width: '120px', textAlign: 'center', margin: '30px 0 20px 0', padding: '4px 10px', borderRadius: '3px', position: "absolute", top: "-20px", right: "10px" }}>{Items.uploadedDate.split("T")[0]}</div>
                                    <h1 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "10px" }}>Title:</h1>
                                    <p className='font-normal text-base' style={{ marginBottom: "20px" }}>{Items.title}</p>
                                    <hr style={{ borderColor: "gray", margin: "20px 0" }} />
                                    <h1 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "10px" }}>Description:</h1>
                                    <p className='font-normal text-base' style={{ marginBottom: "20px" }}>{Items.description}</p>
                                    <div className='flex flex-wrap justify-center'>
                                        {
                                            Items.isDriveData ? (
                                                <>
                                                    <button style={{ padding: "10px 10px", marginRight: "4px", marginTop: "10px" }} onClick={() => { OpeninBrowser(Items.link) }} className='btn-primary'>
                                                        <VisibilityIcon /> View Document
                                                    </button>
                                                    {/* <button style={{ padding: "10px 10px", marginTop: "10px" }} onClick={() => { openDirectLink(Items.link) }} className='btn-secondary'> */}
                                                        {/* <OpenInNewIcon /> Download Document */}
                                                    {/* </button> */}
                                                </>
                                            ) : (<>
                                                <button style={{ padding: "10px 10px", marginTop: "10px",width: "170px" }} onClick={() => { openDirectLink(Items.link) }} className='btn-secondary'>
                                                    <OpenInNewIcon /> Open
                                                </button>
                                            </>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
            {
                loading && !error.status && <div style={{ height: "100%", width: "100%" }} className='flex justify-center items-center'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress style={{ fontSize: "20px" }} />
                    </Box>
                </div>
            }
            {
                error.status && <div style={{ fontSize: "20p", height: "200px", width: "100%" }} className='flex justify-center items-center flex-col'>
                    <p style={{ fontSize: "20px" }}>{error.message}</p>
                </div>
            }
        </div>
    )
}

export default FacultyMaterialComponents
