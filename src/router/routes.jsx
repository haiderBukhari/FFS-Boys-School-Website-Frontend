import { Routes, Route, Navigate  } from "react-router-dom"
import Header from "../components/Header"
import HomePage from "../pages/Home"
import ContactUs from "../pages/contactUs"
import { WriteToPrincipal } from "../pages/WriteToPrincipal"
import ContactResponses from './../pages/ContactResponses/index';
import Login from "../components/Registeration/Login"
import Register from "../components/Registeration/Register"
import { FacultyResources } from "../pages/FacultyResource"
import RegisteredFaculty from "../components/RegisteredFaculty,jsx/Faculty"
import Feedback from "../components/Feedback"
import StudentResources from "../pages/StudentResources"
import Footer from "../components/Footer/alternateFooter"
import FacultyMaterial from "../pages/FacultyMaterials/material"
import FacultyUploadMaterial from "../pages/FacultyResource/uploadResources"
import { useSelector } from 'react-redux';
import NewFaculty from "../pages/FacultyOnboarding/newFaculty"

const Routers = () => {
    const userData = useSelector(state=>state.userData);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/write-to-principal" element={<WriteToPrincipal />} />
                <Route path="/contact-responses" element={userData.id && userData.email==="admin@gmail.com" ? <ContactResponses /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={userData.id ? userData.email==="admin@gmail.com" ? <Register /> : <Navigate to="/faculty/dashboard" /> : <Navigate to="/login" />} />
                <Route path="/admin/dashboard" element={userData.id ? userData.email==="admin@gmail.com" ? <RegisteredFaculty /> : <Navigate to="/faculty/dashboard" /> : <Navigate to="/login" />} />
                <Route path="/faculty/dashboard" element={userData.id ? <FacultyResources /> : <Navigate to="/login" />} />
                <Route path="/students/resources" element={<StudentResources /> } />
                <Route path="/feedback" element={userData.id ? <Feedback /> : <Navigate to="/login" />} />
                <Route path="/students/resources/:Facultyclass/:subject/:id" element={<FacultyMaterial/>} />
                <Route path="/faculty/onboarding" element={userData.id ? <NewFaculty/> : <Navigate to="/login" />} />
                <Route path="/faculty/upload/resources/:Facultyclass/:subject/:id" element={userData.id ? <FacultyUploadMaterial/> : <Navigate to="/login" />} />
                <Route path="*" element={"Page not Found"} />
            </Routes>
            <Footer/>
        </>
    )
}
export default Routers