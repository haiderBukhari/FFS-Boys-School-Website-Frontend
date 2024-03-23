import React, { useState } from "react"
import visit1 from "../../assets/img/visits/Visit1/visit1.jpeg"
import visit2 from "../../assets/img/visits/Visit2/visit2.jpeg"
import visit21 from "../../assets/img/visits/Visit2/visit21.jpeg"
import visit22 from "../../assets/img/visits/Visit2/visit22.jpeg"
import visit23 from "../../assets/img/visits/Visit2/visit23.jpeg"
import visit24 from "../../assets/img/visits/Visit2/visit24.jpeg"
import visit3 from "../../assets/img/visits/Visit3/visit3.jpeg"
import visit31 from "../../assets/img/visits/Visit3/visit31.jpeg"

import { VisitComponent } from "./VisitComponent"
import { VisitsPicturesDialog } from "./VisitsPicturesDialog"

export const MainVisits = React.memo(() => {
    const [selected, setSelected] = useState(null);
    const [dialog, setDialog] = useState(false);
    const data = [
        {
            id: 1,
            date: "22 Aug, 2020",
            img: "https://scontent.fisb2-2.fna.fbcdn.net/v/t39.30808-6/433707904_314409151655138_1453173099344039477_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzucsNmRW48MUNW6Pp_icUZr_EHymbLOtmv8QfKZss60yHxzUPUJZEEtM_3KWkvw2OvUhun0mer90MxWrOT2Zq&_nc_ohc=XifqOLgzuokAX_jXzzj&_nc_ht=scontent.fisb2-2.fna&oh=00_AfAvH8GN3tAX4NBH9RaQdI6--Qp_A2GPyV-nUZTgVzxJ_g&oe=660310B2",
            title: "Visit of Honourable Regional Head Col (Retd) Fazal Wahab.",
            text: "Col (Retd) Fazal Wahab visiting FFS Boys Wah for Annual Prize Distrubution 2024.",
            images: ["https://scontent.fisb2-2.fna.fbcdn.net/v/t39.30808-6/433707904_314409151655138_1453173099344039477_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzucsNmRW48MUNW6Pp_icUZr_EHymbLOtmv8QfKZss60yHxzUPUJZEEtM_3KWkvw2OvUhun0mer90MxWrOT2Zq&_nc_ohc=XifqOLgzuokAX_jXzzj&_nc_ht=scontent.fisb2-2.fna&oh=00_AfAvH8GN3tAX4NBH9RaQdI6--Qp_A2GPyV-nUZTgVzxJ_g&oe=660310B2", "https://scontent.fisb2-2.fna.fbcdn.net/v/t39.30808-6/434157248_314390578323662_459835468077711060_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu_gB5vKhGCP8atYxnDxwA8V0Jjz5CKW_xXQmPPkIpb5EOsvBTPGiToVTIo10pi1yTzR9Bjz174zmvCk-mU99j&_nc_ohc=AEeItxJsS5AAX-wtB1f&_nc_ht=scontent.fisb2-2.fna&oh=00_AfClTt-L66bEnU4Ws8-X-IbO1vmqVGj0pMeoDNRM63mHXg&oe=66039267"]
        }
        , {
            id: 2,
            date: "22 Aug, 2020",
            img: visit1,
            title: "Visit of Respected Ex Director FFES Maj Gen Naseer Ali Khan (Retd).",
            text: "Honourable Ex Director FFES Maj Gen Naseer Ali Khan visiting FFS Boys Wah",
            images: [visit1]
        },
        {
            id: 3,
            date: "22 Aug, 2020",
            img: visit2,
            title: "Visit of worthy General Manager(Education) Brig Asim Siddiqui, SI(M) (Retd).",
            text: "Worthy GM Brig Asim Siddiqui, SI(M), HR Col Noman Bukhari, DM edu Zahoor Ahmad, Ex ZH Col M Ikram and Administrator FCCL shools Maj Shahid visiting senior Section of FFS Boys Wah With P & VP",
            images: [visit2, visit21, visit22, visit23, visit24]
        },
        {
            id: 4,
            date: "22 Aug, 2020",
            img: visit3,
            title: "Visit of Honourable Sr Manager Col Nauman Bukhari (Retd).",
            text: "Honourable Col Noman Bukhari verifying teacher's data during visit.",
            images: [visit3, visit31]
        }
    ]
    return (
        <>
            <section id="events" className="pt-5 pb-2 fadeInUp" data-wow-delay="0.2s">
                <div className="flex justify-center pt-4">
                    <div style={{ border: '1px solid #ccc', padding: '6px 0', width: '120px', textAlign: 'center', borderRadius: '50rem', fontSize: '17px' }} className="box">Visits</div>
                </div>
                <h1 style={{ fontSize: '28px', fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: 'center', margin: '20px 0 40px 0' }}>Worthy Visits</h1>
            </section>
            <div style={{ marginBottom: '90px' }} className="clients overlay bg-white fadeInUp" data-wow-delay="0.2s">
                <div className="container bg-white">
                    <div className="row bg-white">
                        <div className="col-lg-12 col-md-12 col-12 bg-white">
                            <div className="clients-slider bg-white">
                                <VisitComponent data={data} setSelected={setSelected} setDialog={setDialog} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VisitsPicturesDialog dialog={dialog} setDialog={setDialog} selected={selected} setSelected={setSelected} />
        </>
    )
});