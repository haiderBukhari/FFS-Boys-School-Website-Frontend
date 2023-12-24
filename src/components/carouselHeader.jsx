import PropTypes from 'prop-types';
import './style.css'

export const CarouselHeader = ({ image }) => {
    return (
        <div className="single-slider" id='sub-sliders' style={{ background: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="text">
                            {/* <h1>{renderedText}</h1> */}
                            {/* <p>{description}</p> */}
                            <div className="button">
                                {/* <a href="/" className="btn">Upcomming Events</a> */}
                                {/* <a href={link} className="btn primary">Learn More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CarouselHeader.propTypes = {
    image: PropTypes.string.isRequired,
};