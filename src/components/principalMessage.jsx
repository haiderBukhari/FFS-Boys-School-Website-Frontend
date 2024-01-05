import MessageIcon from '@mui/icons-material/Message';
import PrincipalPic from '../assets/img/principalPic.jpeg'
const PrincipalMessage = () => {
    return (
        <div className="" data-wow-delay="0.1s" style={{ width: "95%", margin: "auto" }}>
            <div className={`text-center flex flex-wrap justify-center items-center my-5 ${window.outerWidth < 1000 && 'flex-col'}`}>
                <div className="fadeInUp mx-3" data-wow-delay="0.4s">
                    <div style={{ border: '1px solid #ccc', padding: '6px 0', width: '220px', textAlign: 'center', borderRadius: '50rem', fontSize: '17px', marginBottom: '30px' }} className="box">Message By Principal</div>
                    <div style={{ position: "relative" }}>
                        <img style={{
                            padding: "1px", maxWidth: "550px", minWidth: "200px", width: "100%", borderRadius:
                                "50%"
                        }} className="bg-light p-3 flex-1 hover:scale-105 hover:shadow-md" src={PrincipalPic} alt="" />
                        <MessageIcon style={{ color: "blue", position: "absolute", right: "0", top:"30%" }} />
                    </div>
                </div>

                <div className='flex-1 mt-3'>
                    <p style={{ lineHeight: '1.9rem', textAlign: 'center', marginBottom: '40px', fontSize: '16px', marginTop: '30px', margin: "10px 20px" }}>Dear students, it is with great pleasure that I extend a warm welcome to FFS (boys) Wah. I feel honored to be part of this esteemed and academically rich institute. Our institute was established in the year 1942. We have a team of qualified and dedicated teachers. The constant rapport and close contact among all stake holders like teachers, students, parents ensures that individual students get maximum support to build his/her own personality. We've established a system that consistently monitors quality, reviews standards, and maintains them by incorporating feedback mechanisms, counseling, and providing guidance for career building.</p>
                    <p style={{ margin: "15px 0", textAlign: "center", fontWeight: "bold", fontSize: '18px', lineHeight: '1.9rem', fontFamily: "monospace" }}>Dr. AYAZ HUSSAIN BUKHARI<br /> Principal FFS (boys)<br /> Wah Campus </p>
                </div>
            </div>
        </div>
    )
}

export default PrincipalMessage;