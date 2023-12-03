import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'

export const CarouselHeader = ({ title, description, link, image }) => {
    const parts = title.split(/({[^}]*})/);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line
    }, [window.innerWidth]);


    const renderedText = parts.map((part) => {
        if (part.startsWith('{') && part.endsWith('}')) {
            const innerText = part.slice(1, -1);
            return <span key={Math.floor(Math.random()) * 1000000}>{innerText}</span>;
        } else {
            return part;
        }
    });

    return (
        <div className="single-slider" id='sub-sliders' style={{ background: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', padding: `${screenSize < 568 ? '20px 0' : "20px 60px"}` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="text">
                            <h1>{renderedText}</h1>
                            <p>{description}</p>
                            <div className="button">
                                <a href="/" className="btn">Upcomming Events</a>
                                <a href={link} className="btn primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CarouselHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};