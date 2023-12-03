import { Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import HomePage from "../pages/Home"
import Blogs from "../pages/Blogs"
import ContactUs from "../pages/contactUs"
import { WriteToPrincipal } from "../pages/WriteToPrincipal"
import Footer from "../components/Footer"

const Routers = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/write-to-principal" element={<WriteToPrincipal />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default Routers