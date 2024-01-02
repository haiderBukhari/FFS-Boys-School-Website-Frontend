import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3">
                            <h4 className="text-white mb-4" style={{fontFamily: "poppins", fontSize: "19px", fontWeight: "600"}}>Address</h4>
                            <p style={{lineHeight: '2.3rem'}} className='text-white font-medium'><i className="fa fa-map-marker-alt me-3 text-white"></i>FCCL residential colony Wah cantt</p>
                            <p style={{lineHeight: '2.3rem'}} className='text-white font-medium'><i className="fa fa-phone-alt me-3 text-white"></i>(051) 4937002</p>
                            <p style={{lineHeight: '2.3rem'}} className='text-white font-medium'><i className="fa fa-envelope me-3 text-white"></i>Principal.ffsboys@gmail.com</p>
                            <div className="d-flex pt-2 mb-6">
                                <a className="btn btn-outline-light btn-social text-white" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social text-white" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social text-white" href="/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-light btn-social text-white" href="/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4 className="text-white mb-4" style={{fontFamily: "poppins", fontSize: "19px", fontWeight: "600"}}>Quick Link</h4>
                            <a className="btn btn-link bg-transparent text-white font-medium" href="/">About Us</a>
                            <a className="btn btn-link bg-transparent" href="/contact">Contact Us</a>
                            <a className="btn btn-link bg-transparent" href="/">Features</a>
                            <a className="btn btn-link bg-transparent" href="/">Terms & Condition</a>
                            <a className="btn btn-link bg-transparent" href="/students/resources">Teaching Resources</a>
                        </div>
                        <div className="col-md-6 col-lg-3 bg-transparent">
                            <h4 className="text-white mb-4" style={{fontFamily: "poppins", fontSize: "19px", fontWeight: "600"}}>Popular Link</h4>
                            <a className="btn btn-link bg-transparent" href="/AdmissionForm.pdf">Admission Form</a>
                            <a className="btn btn-link bg-transparent" href="/">Worthy Visits</a>
                            <a className="btn btn-link bg-transparent" href="/">Events</a>
                            <a className="btn btn-link bg-transparent" href="/login">Login</a>
                            <a className="btn btn-link bg-transparent" href="/">Write to Principal</a>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4 className="text-white mb-4" style={{fontFamily: "poppins", fontSize: "19px", fontWeight: "600"}}>Newsletter</h4>
                            <p style={{marginRight: "35px", color: "#fff"}} className="font-medium">Subscribe to FFS Boys Wah Newsletter and receive all updates of events
                            </p>
                            <div className="position-relative w-100 mt-3">
                                <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                                    placeholder="Your Email" style={{ height: "48px" }} />
                                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2 bg-blue-700"><i
                                    className="fa fa-paper-plane text-primary-gradient fs-4"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-lg-5">
                    <div className="copyright">
                        &copy; <a className="border-bottom" href="/">All Copyright Reserved</a>, By FFS Boys School Administeration
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer