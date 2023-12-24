import React from "react";
import { CarouselHeader } from "./carouselHeader";
import slider from "../assets/img/sliders1.jpeg";
import slider2 from "../assets/img/sliders2.png";
import slider3 from "../assets/img/sliders3.png";
import { HeaderNews } from "./HeaderNews";

const DynamicCarousel = React.memo(() => {
    let data = [
        {
            id: 1,
            title: "Won semi-final {FBISE Cricket} Competitions",
            description:
                "Those who believe in hard work always turn out to be a winner 🏆 in life. Those who ignore hard work always become a loser in life",
            link: "/",
            image: slider,
        },
        {
            id: 2,
            title: "Won semi-final FBISE Cricket Competitions",
            description:
                "Those who believe in hard work always turn out to be a winner 🏆 in life. Those who ignore hard work always become a loser in life",
            link: "/",
            image: slider2,
        },
        {
            id: 3,
            title: "Won semi-final FBISE Cricket Competitions",
            description:
                "Those who believe in hard work always turn out to be a winner 🏆 in life. Those who ignore hard work always become a loser in life",
            link: "/",
            image: slider3,
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