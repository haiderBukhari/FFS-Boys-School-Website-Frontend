import { Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import HomePage from "../pages/Home"
// import Blogs from "../pages/Blogs"
import ContactUs from "../pages/contactUs"
import { WriteToPrincipal } from "../pages/WriteToPrincipal"
import Footer from "../components/Footer"
import ContactResponses from './../pages/ContactResponses/index';
import Login from "../components/Registeration/Login"
import Register from "../components/Registeration/Register"
import { FacultyResources } from "../pages/FacultyResource"
import RegisteredFaculty from "../components/RegisteredFaculty,jsx/Faculty"
import Feedback from "../components/Feedback"
const Routers = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/blogs" element={<Blogs />} /> */}
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/write-to-principal" element={<WriteToPrincipal />} />
                <Route path="/contact-responses" element={<ContactResponses />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin-dashboard" element={<RegisteredFaculty />} />
                <Route path="/faculty-resources" element={<FacultyResources />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="*" element={"Page not Found"} />
            </Routes>
            <Footer/>
        </>
    )
}

export default Routers