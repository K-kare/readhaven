import React from "react";
import Navbar from './Navbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Autoplay } from 'swiper/modules';

const Home = () => {
    const SwiperOptionsOne = {
        breakpoints: {
           0: {
            slidesPerView: 1,
           },
           768: {
            slidesPerView: 2,
           },
           1024: {
            slidesPerView: 3,
           }
        },
        loop: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
        },
    };

    return (
        <div className="home-container">
            <Navbar />
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>Discover Your Next Great Read Today</h3>
                        <p>
                            Explore thousands of books across all genres, handpicked for you.
                            <a href="/#" className="btn">Shop Now</a>
                        </p>
                    </div>

                    <div className="swiper">
                        <Swiper
                            watchSlidesProgress={true}
                            modules={[Autoplay]}
                            className="book-list"
                            {...SwiperOptionsOne}
                        >
                            <SwiperSlide>
                                <a href="/#">
                                    <img src="Images/book-2.png" alt="Book 2"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#">
                                    <img src="Images\book-4.png" alt="Book 3"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#">
                                    <img src="Images/book-9.png" alt="Book 9"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#">
                                    <img src="Images/book5.png" alt="Book 5"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#">
                                    <img src="Images/book6.png" alt="Book 6"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#">
                                    <img src="Images/book7.png" alt="Book 7"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#">
                                    <img src="Images/book-4.png" alt="Book 4"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#">
                                    <img src="Images/book-8.png" alt="Book 8"/>
                                </a>
                            </SwiperSlide>
                        </Swiper>
                        <img className="stand" src="Images\stand.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
