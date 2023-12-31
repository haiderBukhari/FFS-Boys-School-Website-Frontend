import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { removeUserData } from "../Interface/userDataSlice";

const Header = () => {
    const Location = useLocation();
    const Navigate = useNavigate();
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeUserData());
        localStorage.removeItem('Token');
        Navigate('/');
    }
    const checkAdmin = () => {
        return userData.email === 'admin@gmail.com';
    }
    return (
        <header className="header" >
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 col-12">
                            <ul className="top-link">
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Doctors</Link></li>
                                <li><Link to="#">Contact</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-7 col-12">
                            <ul className="top-contact">
                                <li><i className="fa fa-phone"></i>+880 1234 56789</li>
                                <li><i className="fa fa-envelope"></i><Link to="mailto:support@yourmail.com">support@yourmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-inner">
                <div className="container">
                    <div className="inner">
                        <div className="row flex items-center">
                            <div className="col-lg-3 col-md-0 flex justify-between items-center" style={{ width: "100%" }}>
                                <div className="logo">
                                    <Link to="/"><img style={{ width: '100px' }} src={Logo} alt="#" /></Link>
                                </div>
                                <div className="flex items-end">
                                    {
                                        userData.id && <div style={{ border: '1px solid #ccc', width: "36px", padding: "5px", borderRadius: "50%" }} className="flex justify-start items-end mx-4">
                                            <LogoutIcon onClick={handleLogout} style={{ cursor: "pointer" }} />
                                        </div>
                                    }
                                    <div className="mobile-nav mt-10"></div>
                                </div>
                            </div>
                            <div className="col-lg-7" style={{ width: 'auto' }}>
                                <div className="main-menu">
                                    <nav className="navigation">
                                        <ul className="nav menu">
                                            {
                                                !userData.id && <>
                                                    <li className={`${Location.pathname === '/' ? 'active' : ''}`}><a href="/">Home</a></li>
                                                    <li className={`${Location.pathname === '/aa' ? 'active' : ''}`}><Link to="#">Students Resources<i className="icofont-rounded-down"></i></Link>
                                                        <ul className="dropdown">
                                                            <li><Link to="/contact-responses">Student Material</Link></li>
                                                            <li><a href="/AdmissionForm.pdf">Admission Form</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`${Location.pathname === '/newsevents' ? 'active' : ''}`}><Link to="/">News & Events</Link></li>
                                                    <li className={`${Location.pathname === '/login' ? 'active' : ''}`}><Link to="/login">Login</Link></li>
                                                    <li className={`${Location.pathname === '/contact' ? 'active' : ''}`}><Link to="/contact">Contact Us</Link></li>
                                                </>
                                            }
                                            {
                                                userData.id && <>
                                                    <li className={`${Location.pathname === '/' ? 'active' : ''}`}><a href="/">Home</a></li>
                                                    <li className={`${Location.pathname === '/admin-dashboard' ? 'active' : ''}`}><Link to="/admin-dashboard">Dashboard</Link></li>
                                                    {
                                                        checkAdmin() ?  <li className={`${Location.pathname === '/register' ? 'active' : ''}`}><Link to="register">Register Faculty</Link></li> : <li className={`${Location.pathname === '/faculty-resources' ? 'active' : ''}`}><Link to="/faculty-resources">Faculty Resources</Link></li>
                                                    }
                                                    <li className={`${Location.pathname === '/feedback' ? 'active' : ''}`}><Link to="/feedback">FeedBack</Link></li>
                                                    <li className={`${Location.pathname === '/contact' ? 'active' : ''}`}><Link to="/contact">Contact Us</Link></li>
                                                </>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 quote-style">
                                <div className="get-quote">
                                    <Link to="/write-to-principal" className="btn">Write to Principal</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header