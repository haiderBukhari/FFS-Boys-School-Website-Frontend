import PropTypes from 'prop-types';
import React from 'react';

export const BoxComponents = React.memo(({ FeaturesArr }) => {
    return (
        <>
            {
                FeaturesArr && FeaturesArr.map((item) => (
                    <div key={Math.floor(Math.random()) * 1000000} style={{ backgroundColor: '#EFF5FF', margin: '10px 15px 20px 20px', borderRadius: '6px', maxWidth: '400px', transition: 'transform 0.3s ease-in-out' }} className="outer-component fadeInUp wow hover:scale-105 hover:shadow-md" data-wow-delay="0.3s">
                        <div className="inner-component p-3">
                            <div className='flex justify-center items-center' style={{
                                padding: '20px', width:
                                    "75px", backgroundColor: '#fff', borderRadius: '50%', margin: '20px 0 0 20px'
                            }}>
                                {item.icon}
                            </div>
                            <div style={{ paddingLeft: "23px" }}>
                                <p style={{ marginTop: "20px", fontSize: '22px', color: '#1B2C51', fontWeight: '600', fontFamily: "cursive" }}>{item.heading}</p>
                                <p style={{ marginTop: "20px", textAlign: "justify", lineHeight: "1.9rem", paddingRight: "20px", fontSize: "15px" }}>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
});

BoxComponents.propTypes = {
    FeaturesArr: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element.isRequired,
            heading: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};