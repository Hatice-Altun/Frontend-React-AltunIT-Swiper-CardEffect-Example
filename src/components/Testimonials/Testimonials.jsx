import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards} from "swiper/modules";
import avatar01 from "../../assets/avatar01.png";
import avatar02 from "../../assets/avatar02.png";
import "./Testimonials.css";

// Import Swiper Slides
import "swiper/css";
import "swiper/css/effect-cards";

// npm i swiper

function Testimonials() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="sliders">
                        <h2 className="section_title">Testimonials</h2>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="slide_item">
                                    <div className="slide_img-01"><img src={avatar01} alt=""/></div>
                                    <h4>Name</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque ex
                                        ipsum magni perspiciatis soluta. Accusamus eaque nulla obcaecati quaerat! Cumque ducimus,
                                        expedita ipsam necessitatibus omnis quasi saepe. Atque.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide_item">
                                    <div className="slide_img-02"><img src={avatar02} alt=""/></div>
                                    <h4>Name</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque ex
                                        ipsum magni perspiciatis soluta. Accusamus eaque nulla obcaecati quaerat! Cumque ducimus,
                                        expedita ipsam necessitatibus omnis quasi saepe. Atque.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide_item">
                                    <div className="slide_img-03"><img src={avatar01} alt=""/></div>
                                    <h4>Name</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque ex
                                        ipsum magni perspiciatis soluta. Accusamus eaque nulla obcaecati quaerat! Cumque ducimus,
                                        expedita ipsam necessitatibus omnis quasi saepe. Atque.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
