import aboutPic1 from "../assets/img/activity1.jpg"
import aboutPic2 from "../assets/img/activity2.jpg"
import aboutPic3 from "../assets/img/head.jfif"

const HomeAbout = () => {
    return (
        <div className="container-xxl py-5 pt-0 wow fadeInUp" data-wow-delay="0.4s">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div style={{ border: '1px solid #ccc', padding: '6px 0', width: '160px', textAlign: 'center', borderRadius: '50rem', fontSize: '17px', marginBottom: '10px' }} className="box">Achievements</div>
                        <h1 style={{ fontWeight: 'bold', fontSize: '23px', lineHeight: '2.3rem' }} className="mb-4">Latest Achievements</h1>
                        <p style={{ lineHeight: '1.9rem', textAlign: 'justify', marginBottom: '40px', fontSize: '16px', marginTop: '30px' }}>The students of FFS Boys Wah have clinched the 2nd position in the FBISE Science Models Competition, an accomplishment celebrated during the Science Model Exhibition where they were honored with an award by the Chairman of the Federal Board of Intermediate and Secondary Education (FBISE). This recognition underscores the students exceptional dedication to scientific inquiry and innovation, showcasing their prowess in critical thinking and problem-solving.</p>
                    </div>
                    <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img style={{ margin: '0 auto 70px auto', height: 'auto' }} className="img-fluid w-75 rounded-circle bg-light p-3" src={aboutPic3} alt="" />
                            </div>
                            <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                                <img className="img-fluid w-100 rounded-circle bg-light p-3" src={aboutPic1} alt="" />
                            </div>
                            <div className="col-6 text-end" style={{ marginTop: '-150px' }}>
                                <img className="img-fluid w-100 rounded-circle bg-light p-3" src={aboutPic2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout