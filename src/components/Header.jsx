import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const Location = useLocation();
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
                            <div className="col-lg-3 col-md-0">
                                <div className="logo" style={{ marginTop: '4px' }}>
                                    <Link to="/"><img style={{ width: '150px' }} src={Logo} alt="#" /></Link>
                                </div>
                                <div className="mobile-nav mt-10"></div>
                            </div>
                            <div className="col-lg-7" style={{ width: 'auto' }}>
                                <div className="main-menu">
                                    <nav className="navigation">
                                        <ul className="nav menu">
                                            {/* <li className="active"><Link to="#">Home <i className="icofont-rounded-down"></i></Link>
                                                <ul className="dropdown">
                                                    <li><Link to="index.html">Home Page 1</Link></li>
                                                </ul>
                                            </li> */}
                                            <li className={`${Location.pathname === '/' ? 'active': ''}`}><a href="/">Home</a></li>
                                            <li className={`${Location.pathname === '/do' ? 'active': ''}`}><Link to="#">Doctos </Link></li>
                                            <li className={`${Location.pathname === '/aa' ? 'active': ''}`}><Link to="#">Services </Link></li>
                                            <li className={`${Location.pathname === '/aa' ? 'active': ''}`}><Link to="#">Pages <i className="icofont-rounded-down"></i></Link>
                                                <ul className="dropdown">
                                                    <li><Link to="404.html">404 Error</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="#">Blogs <i className="icofont-rounded-down"></i></Link>
                                                <ul className="dropdown">
                                                    <li><Link to="blog-single.html">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`${Location.pathname === '/contact' ? 'active': ''}`}><Link to="/contact">Contact Us</Link></li>
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