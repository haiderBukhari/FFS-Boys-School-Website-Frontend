import './index.css'
import PhoneIcon from '@mui/icons-material/Phone';
import style from "../components/styles.module.css"

export const WriteToPrincipal = () => {
    return (
        <>
            <div style={{backgroundColor: '#1a76d1'}} className={`breadcrumbs ${style.overlay}`}>
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2>Write to Principal</h2>
                                <ul className="bread-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li><i className="icofont-simple-right"></i></li>
                                    <li className="active">Write to Principal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
                            <h1 style={{ fontWeight: 'bold', fontSize: '23px', lineHeight: '2.3rem', paddingLeft: '3px' }} className="mb-4 mt-2">Write to Principal (FFC Boys School)</h1>
                            <p style={{lineHeight: '1.9rem', textAlign: 'justify'}} className="mb-4">You are welcome to contact the principal confidentially to provide feedback, share your opinions or report any difficulties. The principal is available to discuss issues regarding subjects, teachers or your overall experience. Your response will be kept strictly confidential and not shared with teachers. The goal is a positive learning environment for all. Please feel free to reach out to the principal with feedback or concerns so we can continue improving students experiences.</p>
                            <div className="rounded d-flex align-items-center p-5 mb-4 call">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width: "55px", height: "55px"}}>
                                    <PhoneIcon style={{color: '#007bff'}}/>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2 text font-bold text-md">Call Us Now</p>
                                    <h5 className="mb-0 text-lg font-semibold">+92 334 2092248</h5>
                                </div>
                            </div>
                            <div className="bg-light mail rounded d-flex align-items-center p-5 mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width: "55px", height: "55px"}}>
                                    <i className="fa fa-envelope-open text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2 font-bold text-md">Mail Us Now</p>
                                    <h5 className="mb-0"><a className='font-semibold text-lg' href="mailto:principal@ffsboys.com">principal@ffsboys.com</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp mb-5" data-wow-delay="0.5s">
                            <div className="rounded h-100 d-flex align-items-center p-5 write-principal-sidebar">
                                <form>
                                    <h1 style={{ fontWeight: 'bold', fontSize: '23px', lineHeight: '2.3rem', paddingLeft: '3px', marginBottom: '50px', textAlign: 'center' }}>Fill the Deatils</h1>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Name (Optional)" style={{height: "55px", marginBottom: '20px', padding: '10px'}}/>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control border-0" placeholder="Your Email (Optional)" style={{height: "55px",  marginBottom: '20px', padding: '10px'}}/>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Mobile (Optional)" style={{height: "55px",  marginBottom: '20px', padding: '10px'}}/>
                                        </div>
                                        <div className="col-12 col-sm-6 flex items-center justify-center">
                                            <select className="form-select border-0 flex items-center justify-center" style={{height: "55px",  marginBottom: '20px', width: '400px',padding: '10px'}}>
                                                <option selected>Select Class</option>
                                                {
                                                    new Array(10).fill(0).map((item, index)=>(
                                                        <option key={Math.floor(Math.random() * 10000)} value={index + 1}>{index + 1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea style={{padding: '10px'}} className="form-control border-0" rows="5" placeholder="Describe your problem (Required)"></textarea>
                                        </div>
                                        <div className="get-quote m-auto" >
                                    <a href="/write-to-principal" style={{marginTop: '40px'}} className="btn">Send Message</a>
                                </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 