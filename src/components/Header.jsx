import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { removeUserData } from "../Interface/userDataSlice";
import { SuccesToast } from "./ReactToast";

const Header = () => {
    const Location = useLocation();
    const Navigate = useNavigate();
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeUserData());
        localStorage.removeItem('Token');
        Navigate('/login');
        SuccesToast('Logged Out');
    }
    const checkAdmin = () => {
        return userData.email === 'admin@gmail.com';
    }
    return (
        <header className="header" >
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="flex justify-between items-center flex-wrap" style={{ width: "100%", padding: "0 0 0 20px" }}>
                            <ul className="top-contact" style={{ float: "none" }}>
                                <li><i className="fa fa-phone"></i>(051) 4937002</li>
                                <li><i className="fa fa-envelope"></i><Link to="mailto:vp@ffsboyswah@gmail.com">vp@ffsboyswah@gmail.com</Link></li>
                            </ul>
                            {
                                userData.id && <div style={{ border: '1px solid #ccc', width: "36px", padding: "5px", borderRadius: "50%" }} className="flex justify-start items-end mx-4">
                                    <LogoutIcon onClick={handleLogout} style={{ cursor: "pointer" }} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-inner">
                <div className="container">
                    <div className="inner">
                        <div className="row flex items-center">
                            <div className="col-lg-3 col-md-0" style={{ width: "100%" }}>
                                <div className="logo">
                                    <a href="/"><img style={{ width: '100px' }} src={Logo} alt="#" /></a>
                                </div>
                                {/* <div> */}
                                <div className="mobile-nav mt-10"></div>
                                {/* </div> */}
                            </div>
                            <div className="col-lg-7" style={{ width: 'auto' }}>
                                <div className="main-menu">
                                    <nav className="navigation">
                                        <ul className="nav menu">
                                            {
                                                !userData.id && <>
                                                    <li className={`${Location.pathname === '/' ? 'active' : ''}`}><a href="/">Home</a></li>
                                                    <li className={`${Location.pathname === '/students/resources' ? 'active' : ''}`}><Link to="/students/resources">Students Resources</Link></li>
                                                    {/* <li className={`${Location.pathname === '/newsevents' ? 'active' : ''}`}><Link to="/">News & Events</Link></li> */}
                                                    <li className={`${Location.pathname === '/login' ? 'active' : ''}`}><Link to="/login">Login</Link></li>
                                                    <li><Link to="/courses/web-development">Courses<i className="icofont-rounded-down"></i></Link>
                                                        <ul className="dropdown">
                                                            <li><Link to="/courses/web-development">Web Development Course</Link></li>
                                                        </ul>
                                                    </li>

                                                    <li className={`${Location.pathname === '/contact' ? 'active' : ''}`}><Link to="/contact">Contact Us</Link></li>
                                                </>
                                            }
                                            {
                                                userData.id && <>
                                                    <li className={`${Location.pathname === '/' ? 'active' : ''}`}><a href="/">Home</a></li>
                                                    {
                                                        checkAdmin() && <li className={`${Location.pathname === '/admin/dashboard' ? 'active' : ''}`}><Link to="/admin/dashboard">Dashboard</Link></li>
                                                    }
                                                    {
                                                        checkAdmin() ? <li className={`${Location.pathname === '/register' ? 'active' : ''}`}><Link to="register">Register Faculty</Link></li> : !userData.isPasswordChanged || !userData.isUserInfoChanged ? <li className={`${Location.pathname === '/faculty/onboarding' ? 'active' : ''}`}><Link to="/faculty/onboarding">Faculty OnBoarding</Link></li> : <li className={`${Location.pathname === '/faculty/dashboard' ? 'active' : ''}`}><Link to="/faculty/dashboard">Faculty Dashboard</Link></li>
                                                    }
                                                    <li><Link to="/courses/web-development">Courses<i className="icofont-rounded-down"></i></Link>
                                                        <ul className="dropdown">
                                                            <li><Link to="/courses/web-development">Web Development Course</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`${Location.pathname === '/feedback' ? 'active' : ''}`}><Link to="/feedback">FeedBack</Link></li>
                                                </>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 quote-style">
                                {
                                    !userData.id && <div className="get-quote">
                                        <Link to="/write-to-principal" className="btn">Write to Principal</Link>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header