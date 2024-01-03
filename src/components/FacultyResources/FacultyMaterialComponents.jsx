import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
import './material.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const FacultyMaterialComponents = ({ id, subject, Facultyclass, fetchAgain, setFetchAgain }) => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setError] = useState({
        status: false,
        message: ""
    });
    const [pdfLinks, setPdfLinks] = useState(null);
    const FetchFacultyData = async () => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_BACKEND_PORT}/faculty`, {
            params: {
                facultyId: id,
                subject: subject,
                class: Facultyclass,
                find: inputValue,
                page: page,
                pageSize: 9,
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            console.log(res.data.FacultyData)
            setPdfLinks(res.data.FacultyData.link)
            setLoading(false);
            setError({
                status: false,
            });
        }).catch(err => {
            setError({
                status: true,
                message: err.response ? err.response.data.error : "Something went wrong"
            });
        })
    }
    const handlePageChange = (newPage) => {
        setPage(newPage);
        setFetchAgain(!fetchAgain);
    };
    useEffect(() => {
        FetchFacultyData();
    }, [fetchAgain]) //eslint-disable-line

    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        setIsActive(true);
        setFetchAgain(!fetchAgain)
    };

    const handleCancel = () => {
        setIsActive(false);
    };


    function getViewLinkDirect(link) {
        const match = link.match(/\/file\/d\/(.+?)\/(?:view|edit)/);
        return match ? `https://drive.google.com/uc?id=${match[1]}` : link;
    }

    function openDirectLink(link) {
        const directLink = getViewLinkDirect(link);
        window.open(directLink, '_blank');
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    function OpeninBrowser(link) {
        window.open(link, '_blank');
    }
    return (
        <div>
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
            {
                !error.status && pdfLinks && <>
                    <div className='flex items-center flex-wrap justify-center'>
                        {pdfLinks.map((Items, index) => (
                            <div key={index + 1097} style={{ margin: '20px', maxWidth: "350px", minWidth: "200px", width: "100%" }}>
                                <div className='hover:scale-105 hover:shadow-md' style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", padding: "20px 10px", borderRadius: "8px", border: "1px solid #ccc", position: "relative", transition: "all 0.4s ease" }}>
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
                                                <button style={{ padding: "10px 10px", marginTop: "10px", width: "170px" }} onClick={() => { openDirectLink(Items.link) }} className='btn-secondary'>
                                                    <OpenInNewIcon /> Open
                                                </button>
                                            </>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="pagination flex justify-center items-center">
                        <button style={{padding:"4px 10px", backgroundColor: "#007bff", color: "#fff", margin: "4px", width: "120px"}} disabled={page === 1} onClick={() => handlePageChange(page - 1)}><SkipPreviousIcon/> Previous</button>
                        <span style={{fontSize: "20px", margin: "6px"}}> {page}</span>
                        <button style={{padding:"4px 10px", backgroundColor: "#007bff", color: "#fff", margin: "4px", width: "120px"}} disabled={!pdfLinks || pdfLinks.length < 9} onClick={() => handlePageChange(page + 1)}>  Next <SkipNextIcon/></button>
                    </div>
                </>
            }
            {
                loading && !error.status && <div style={{ height: "200px", width: "100%" }} className='flex justify-center items-center'>
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