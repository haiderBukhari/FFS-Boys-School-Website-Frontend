import { useParams } from 'react-router-dom';
import FacultyMaterialComponents from "../../components/FacultyResources/FacultyMaterialComponents";

const FacultyMaterial = () => {
    const { Facultyclass, subject, id } = useParams();
    const [fetchAgain, setFetchAgain] = useState(false); //eslint-disable-line

    return (
        <FacultyMaterialComponents id={id} subject={subject} Facultyclass={Facultyclass} fetchAgain={fetchAgain}/>
    );
};

export default FacultyMaterial;

