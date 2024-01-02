import { useParams } from 'react-router-dom';
import FacultyMaterialComponents from "../../components/FacultyResources/FacultyMaterialComponents";
import UploadDialog from './UploadDialog';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const FacultyUploadMaterial = () => {
    const Navigate = useNavigate();
    const { Facultyclass, subject, id } = useParams();
    const [open, setOpen] = useState(false);
    const [fetchAgain, setFetchAgain] = useState(false);
    return (
        <>
            <p style={{ fontSize: "17px", textAlign: "center", marginTop: "20px", marginBottom: "20px" }}><ArrowBackIosIcon onClick={() => { Navigate('/faculty/dashboard') }} style={{ marginRight: "10px", cursor: "pointer" }} />Go Back to Dashboard Page</p>
            <div onClick={() => { setOpen(true) }} className="date" style={{ backgroundColor: '#1A76D1', color: '#fff', width: '170px', textAlign: 'center', margin: '30px auto 20px auto', padding: '8px 10px', borderRadius: '3px', top: "-20px", right: "10px", fontWeight: "bold", cursor: "pointer" }}>Upload Material</div>
            <UploadDialog open={open} setOpen={setOpen} id={id} subject={subject} Facultyclass={Facultyclass} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            <FacultyMaterialComponents id={id} subject={subject} Facultyclass={Facultyclass} fetchAgain={fetchAgain} />
        </>
    );
};

export default FacultyUploadMaterial;