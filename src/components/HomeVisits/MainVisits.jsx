import visit1 from "../../assets/img/visits/visit1.jpeg"
import visit2 from "../../assets/img/visits/visit2.jpeg"
import visit3 from "../../assets/img/visits/visit3.jpeg"
import { VisitComponent } from "./VisitComponent"
export const MainVisits = () => {
    const data = [
        {
            date: "22 Aug, 2020",
            img: visit1,
            title: "Visit of Respected Ex Dir FF Edn Gen Naseer.",
            text: "Honourable Ex Dir FF Edn Gen Naseer visiting FFS Boys Wah"
        },
        {
            date: "22 Aug, 2020",
            img: visit2,
            title: "Visit of worthy GM Brig Asim.",
            text: "Worthy GM Brig Asim SM, HR Col Noman Bukhari, DM edu Zahoor Ahmad, Ex ZH Col M Ikram and Administrator FCCL shools Maj Shahid visiting senior Section of FFS Boys Wah With P & VP"
        },
        {
            date: "22 Aug, 2020",
            img: visit3,
            title: "Visit of Honourable Col Noman Bukhari.",
            text: "Honourable Col Noman Bukhari verifying teacher's data during visit."
        }
    ]
    return (
        <>
            <section className="pt-5 pb-2 fadeInUp" data-wow-delay="0.2s">
                <div className="flex justify-center pt-4">
                    <div style={{ border: '1px solid #ccc', padding: '6px 0', width: '120px', textAlign: 'center', borderRadius: '50rem', fontSize: '17px' }} className="box">Visits</div>
                </div>
                <h1 style={{ fontSize: '28px', fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: 'center', margin: '20px 0 40px 0' }}>Worthy Visits</h1>
            </section>
            <div style={{ marginBottom: '90px' }} className="clients overlay bg-white fadeInUp" data-wow-delay="0.2s">
                <div className="container bg-white">
                    <div className="row bg-white">
                        <div className="col-lg-12 col-md-12 col-12 bg-white">
                            <div className="owl-carousel clients-slider bg-white m-auto">
                                <VisitComponent data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}