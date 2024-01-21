import React, { useState } from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CallIcon from '@mui/icons-material/Call';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ShowMore from '../../assets/showmore.png';
import './Faculty.css'; // Import your CSS file

const RegisteredFaculty = () => {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmail, setSelectedEmail] = useState(null);

    const data = [
        { name: 'Mr John Doe1', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe2', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe3', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe4', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe5', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe6', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe7', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe8', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe9', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe10', email: 'apshaiderbukhari786@gmail.com' },
        { name: 'Mr John Doe11', email: 'apshaiderbukhari786@gmail.com' },
    ];

    const handleRowClick = (email) => {
        setSelectedEmail(email === selectedEmail ? null : email);
    };
    const renderTableRows = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        return data.slice(startIndex, endIndex).map((row, index) => (
            <tr
                key={index}
                className={row.email === selectedEmail ? 'selected' : ''}
            >
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>
                    <img
                        onClick={() => {
                            handleRowClick(row.email);
                        }}
                        style={{ border: 'none', borderRadius: '0px', width: 'auto', height: '20px', cursor: 'pointer' }}
                        src={ShowMore}
                        alt="show more"
                        loading="lazy"
                    />
                </td>
            </tr>
        ));
    };

    return (
        <div className='faculty-main' style={{ padding: '10px 30px' }}>
            <div class="left">
                <h1 style={{ fontFamily: "poppins", fontSize: "36px", fontWeight: "600", marginBottom: "10px", color: "#342E37" }}>Dashboard</h1>
            </div>
            <ul class="box-info">
                <li style={{ backgroundColor: "#F9F9F9", boxShadow: "1px 1px 10px #ccc", border: "1px solid #ccc" }}>
                    <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: 'center', alignItems: "center", backgroundColor: "#CFE8FF", borderRadius: "10px" }}>
                        <HowToRegIcon style={{ fontSize: "70px", color: "#3C91E6" }} />
                    </div>
                    <span class="text">
                        <h3>20</h3>
                        <p>Registered Faculty</p>
                    </span>
                </li>
                <li style={{ backgroundColor: "#F9F9F9", boxShadow: "1px 1px 10px #ccc", border: "1px solid #ccc", position: "relative" }}>
                    <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: 'center', alignItems: "center", backgroundColor: "#FFF2C6", borderRadius: "10px" }}>
                        <CallIcon style={{ fontSize: "70px", color: "#FFCE26" }} />
                    </div>
                    <span class="text">
                        <h3>2834</h3>
                        <p>Contact Responses</p>
                    </span>
                    <ArrowForwardIcon style={{ position: "absolute", fontSize: '40px', bottom: '20px', right: '10px' }} />
                </li>
                <li style={{ backgroundColor: "#F9F9F9", boxShadow: "1px 1px 10px #ccc", border: "1px solid #ccc", position: "relative" }}>
                    <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: 'center', alignItems: "center", backgroundColor: "#FFE0D3", borderRadius: "10px" }}>
                        <ModeEditOutlineIcon style={{ fontSize: "70px", color: "#FD7238" }} />
                    </div>
                    <span class="text">
                        <h3>10</h3>
                        <p>Principal Responses</p>
                    </span>
                    <ArrowForwardIcon style={{ position: "absolute", fontSize: '40px', bottom: '20px', right: '10px' }} />
                </li>
            </ul>
            <div className='table-data'>
                <div className='order'>
                    <div class="head">
                        <h3>Registered Faculties</h3>
                        <i class='bx bx-search' ></i>
                        <i class='bx bx-filter' ></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Faculty Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>{renderTableRows()}</tbody>
                    </table>
                    <div className='pagination'>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>{currentPage}</span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(data.length / pageSize)))}
                            disabled={currentPage === Math.ceil(data.length / pageSize)}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className='todo'>
                    <div className='head'>
                        <h3>Links</h3>
                        <i className='bx bx-plus'></i>
                        <i className='bx bx-filter'></i>
                    </div>
                    <ul className='todo-list'>
                        <li className='completed'>
                            <p>Register Faculty</p>
                            <OpenInNewIcon />
                        </li>
                        <li className='completed'>
                            <p>Contact Responses</p>
                            <OpenInNewIcon />
                        </li>
                        <li className='not-completed'>
                            <p>Principal Contact Responses</p>
                            <OpenInNewIcon />
                        </li>
                        <li className='completed'>
                            <p>Feedback Responses</p>
                            <OpenInNewIcon />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RegisteredFaculty;
