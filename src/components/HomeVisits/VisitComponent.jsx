import PropTypes from 'prop-types';
import './Visits.css'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

export const VisitComponent = ({ data, setSelected, setDialog }) => {
    return (
        <>
            {
                data.map((item) => (
                    <div key={Math.floor(Math.random() * 100000)} className="single-clients" style={{ marginBottom: '20px' }}>
                        <div className="bg-white">
                            <div style={{ boxShadow: "0px 0px 10px #00000014", transition: "all 0.4s ease", borderRadius: '10px', maxWidth: '350px', marginLeft: '10px', height: '520px' }} className="single-news hover:scale-105 hover:shadow-md">
                                <div style={{ width: '350px' }} className="news-head">
                                    <div className="image-container cursor-default">
                                        <img className="rounded-md p-0" style={{ transition: "all 0.4s ease", height: "260px", width: "350px" }} src={item.img} alt="#" />
                                        <div onClick={()=>{
                                            setSelected({
                                                date: item.date,
                                                title: item.title,
                                                text: item.text,
                                                images: item.images
                                            });
                                            setDialog(true);
                                        }} className='detail-button cursor-pointer flex justify-center item-center'>
                                            <OpenInFullIcon style={{fontSize: "15px", marginRight: "10px"}}/>Show More
                                        </div>
                                    </div>
                                </div>
                                <div className="news-body" style={{ padding: '0 20px 40px 10px' }}>
                                    <div className="news-content">
                                        <div className="date" style={{ backgroundColor: '#1A76D1', color: '#fff', width: '120px', textAlign: 'center', margin: '30px 0 20px 0', padding: '4px 10px', borderRadius: '3px' }}>{item.date}</div>
                                        <h2 style={{ marginBottom: '4px' }}><a href="/" style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '20px', textAlign: 'justify', lineHeight: '2.0rem' }}>{item.title}</a></h2>
                                        <p style={{ textAlign: 'justify', marginTop: '15px' }} className="text">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}


VisitComponent.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            date: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        })
    ).isRequired,
    setSelected: PropTypes.func.isRequired,
    setDialog: PropTypes.func.isRequired,
};