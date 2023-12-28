import React from "react";
import { CarouselHeader } from "./carouselHeader";
import { HeaderNews } from "./HeaderNews";

const DynamicCarousel = React.memo(() => {
    let data = [
        {
            id: 1,
            title: "Won semi-final {FBISE Cricket} Competitions",
            description:
                "Those who believe in hard work always turn out to be a winner 🏆 in life. Those who ignore hard work always become a loser in life",
            link: "/",
            image: 'https://res.cloudinary.com/dlv0dshiq/image/upload/v1703745857/sliders1_evyfsj.jpg',
        },
        {
            id: 2,
            title: "Won semi-final FBISE Cricket Competitions",
            description:
                "Those who believe in hard work always turn out to be a winner 🏆 in life. Those who ignore hard work always become a loser in life",
            link: "/",
            image: 'https://res.cloudinary.com/dlv0dshiq/image/upload/v1703745945/sliders2_pttz2b.png',
        },
        {
            id: 3,
            title: "Won semi-final FBISE Cricket Competitions",
            description:
                "Those who believe in hard work always turn out to be a winner 🏆 in life. Those who ignore hard work always become a loser in life",
            link: "/",
            image: 'https://res.cloudinary.com/dlv0dshiq/image/upload/v1703745943/sliders3_uiu5s8.png',
        },
    ];
    return (
        <>
            <section className="slider">
                <div className="hero-slider">
                    {data.map((item) => (
                        <CarouselHeader
                            key={item.id}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>
            <HeaderNews />
        </>
    );
});

export default DynamicCarousel;