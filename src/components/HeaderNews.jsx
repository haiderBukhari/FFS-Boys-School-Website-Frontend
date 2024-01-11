import DownloadIcon from '@mui/icons-material/Download';
import {Link} from "react-router-dom"
export const HeaderNews = () => {
    return (
        <>
            <section className="schedule">
                <div className="container">
                    <div className="schedule-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 mb-0">
                                <div className="single-schedule first">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fa fa-ambulance"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>Materials</span>
                                            <h4>Students Material</h4>
                                            <br />
                                            <Link to="/students/resources">LEARN MORE<i className="fa fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-schedule middle">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-prescription"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>FFC News</span>
                                            <h4>Latest News and Events</h4>
                                            <br />
                                            <a href="#events">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-12">
                                <div className="single-schedule last">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-ui-clock"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>Forms</span>
                                            <h4>Admission Form</h4>
                                            <br />
                                            <a href="/AdmissionForm.pdf">Download <DownloadIcon/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}