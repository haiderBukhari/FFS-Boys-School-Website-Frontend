import { useRef } from "react"
import { Link } from "react-router-dom"
import style from "../../components/styles.module.css"
import axios from 'axios';
const ContactUs = () => {
    let name = useRef("");
    let email = useRef("");
    let phone = useRef("");
    let subject = useRef("");
    let message = useRef("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name.current.value, 
            email: email.current.value, 
            phone: phone.current.value, 
            subject: subject.current.value, 
            message: message.current.value
        }
            axios.post(`${process.env.REACT_BACKEND_PORT}s/contact`, data , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => alert("Submitted"));
    }
    return (
        <>
            <div style={{backgroundColor: '#1a76d1'}} className={`breadcrumbs ${style.overlay}`}>
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2>Contact Us</h2>
                                <ul className="bread-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li><i className="icofont-simple-right"></i></li>
                                    <li className="active">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contact-us section">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-us-left">
                                    <div id="myMap">
                                            <iframe style={{ frameborder: '0', minHeight: '400px', border: '0', tabindex: '0' }} className="position-relative rounded w-100 h-100"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10940.827157605738!2d72.6686897!3d33.7716564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfc4650d8d975fb3!2sWah%20Cantt.%2C%20Wah%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" allowfullscreen="" aria-hidden="false"></iframe> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-us-form">
                                    <h2>Contact With Us</h2>
                                    <p>If you have any questions please fell free to contact with us.</p>
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" placeholder="Name" required={true} ref={name}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Email" required={true} ref={email}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="phone" placeholder="Phone" required={true} ref={phone}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="subject" placeholder="Subject" required={true} ref={subject}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea name="message" placeholder="Your Message" required={true} ref={message}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group login-btn">
                                                    <div className="get-quote">
                                                        <button style={{backgroundColor: '#1A76D1'}} type="submit" className="btn cursor-pointer">Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="row">
                            <div className="col-lg-4 col-12 ">
                                <div className="single-info">
                                    <i className="icofont icofont-ui-call"></i>
                                    <div className="content">
                                        <h3>(051) 4937002</h3>
                                        <p>Principal.ffsboys@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 ">
                                <div className="single-info">
                                    <i className="icofont-google-map"></i>
                                    <div className="content">
                                        <h3>FCCL residential colony Wah cantt</h3>
                                        <p>Punjab, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 ">
                                <div className="single-info">
                                    <i className="icofont icofont-wall-clock"></i>
                                    <div className="content">
                                        <h3>Mon - Sat: 8am - 5pm</h3>
                                        <p>Sunday Closed</p>
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

export default ContactUs