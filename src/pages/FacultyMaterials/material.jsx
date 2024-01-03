import { useParams } from 'react-router-dom';
import FacultyMaterialComponents from "../../components/FacultyResources/FacultyMaterialComponents";
import { useState } from 'react';

const FacultyMaterial = () => {
    const { Facultyclass, subject, id } = useParams();
    const [fetchAgain, setFetchAgain] = useState(false);

    return (
        <FacultyMaterialComponents id={id} subject={subject} Facultyclass={Facultyclass} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
    );
};

export default FacultyMaterial;

