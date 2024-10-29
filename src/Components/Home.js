import React from "react";
import Navbar from './Navbar';
import { FaLock, FaPlane, FaHeadset, FaSearch, FaHeart, FaEye, FaStar, FaStarHalf } from "react-icons/fa";
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
    const SwiperOptionsTwo = {
        breakpoints: {
            0: {
             slidesPerView: 1,
             spaceBetween:10,
            },
            450: {
             slidesPerView: 2,
             spaceBetween: 10,
            },
            768: {
             slidesPerView: 3,
             spaceBetween: 10,
            },
            1024: {
                slidesPerView:4,
            }
        },
         loop: true,
         centeredSlides:true,
         spaceBetween:10,
    };
    const SwiperOptionsThree = {
        breakpoints: {
            0: {
             slidesPerView: 1,
             spaceBetween:10,
            },
            450: {
             slidesPerView: 2,
             spaceBetween: 10,
            },
            768: {
             slidesPerView: 3,
             spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
            }
        },
         loop: true,
         centeredSlides:true,
         spaceBetween:10,
    };
    return (
        <div className="home-container">
            <Navbar />
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>Discover a Great Read Today
                        </h3>
                        <p>Explore thousands of books across all genres, handpicked for you.</p>
                        <a href="/#" className="btn">Shop Now</a>
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
            <section className="icons-container">
                <div className="icons">
                    <i><FaPlane /></i>
                    <div className="content">
                        <h3>over payment</h3>
                        <p>over payment KSH:100</p>
                    </div>
                </div>
                <div className="icons">
                    <i><FaLock /></i>
                    <div className="content">
                        <h3>over payment</h3>
                        <p>over payment KSH:100</p>
                    </div>
                </div>
                <div className="icons">
                    <i><FaHeadset /></i>
                    <div className="content">
                        <h3>over payment</h3>
                        <p>over payment KSH:100</p>
                    </div>
                </div>


            </section>

            <section className="featured" id="featured">
                <div className="heading"><span>featured books</span></div>
                <div className="swiper">
                    <Swiper
                       watchSlidesProgress={true}
                       autoplay={{
                        delay:3500,
                        disableOnInteraction:false
                       }}
                       modules={[Autoplay]}
                       className="featured-slider"
                       {...SwiperOptionsTwo}
                    >
                        <SwiperSlide>
                            <div className="box">
                                <div className="icons">
                                    <a href="\#"><FaSearch /></a>
                                    <a href="\#"><FaHeart /></a>
                                    <a href="\#"><FaEye /></a>
                                </div>
                                <div className="image">
                                    <img src="Images\book-1.png" alt="" />
                                </div>
                                <div className="content">
                                   <h3>featured book</h3>
                                   <div className="price">$15.99<span>$20.99</span></div>
                                   <a href="\#" className="btn">add to cart</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book-2.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                             </div>
                            <div className="image">
                                <img src="Images\book3.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book-4.png" alt="" />
                                </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book5.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book7.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book-9.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book-8.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book-10.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book-3.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch /></a>
                                <a href="\#"><FaHeart /></a>
                                <a href="\#"><FaEye /></a>
                            </div>
                            <div className="image">
                                <img src="Images\book-6.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                        </SwiperSlide>                                                                                                                                                                       
                    </Swiper> 
                </div>
            </section>
            <section className="newsletter">
                <form action="">
                    <h3>subscribe for latest update</h3>
                    <input type="email" placeholder="enter your email" className="box" />
                    <input type="submit" value="subscribe" className="btn" />
                </form> 
            </section>
            <section className="arrivals" id="arrivals">
               <div className="heading" ><span>new arrivals</span></div>
               <div className="swiper">
                    <Swiper
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={{Autoplay}}
                    className="arrivals-slider"
                    {...SwiperOptionsThree}
                    >
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-1.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-10.png" alt="" ></img> 
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                    <div className="stars">
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStarHalf /></i>
                                    </div>
                                </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-3.png" alt="" ></img> 
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-2.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book5.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                         </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-4.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book7.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-8.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-6.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
    
                    </Swiper>
               </div>
               <div className="swiper">
                <Swiper
                watchSlidesProgress={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={{Autoplay}}
                className="arrivals-slider"
                {...SwiperOptionsThree}
                >
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-1.png" alt="" />
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-10.png" alt="" ></img> 
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-3.png" alt="" ></img> 
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-2.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book5.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-4.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book7.png" alt="" ></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99<span>$$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="\#" className="box">
                            <div className="image">
                                <img src="Images\book-8.png" alt="" ></img>
                            </div>
                            <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="Images\book-6.png" alt="" ></img>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                </Swiper>
            </div>
            </section>
            <section className="deal">
                <div className="content">
                    <h3>**deal of the day</h3>
                    <h1>upto 50% offers</h1>
                    <p> Today only, dive into a world of adventure with **50% off our top fiction picks! 
                    these books are the perfect companions for a cozy reading day.
                    </p>
                    <a href="\#" className="btn"> Shop Now</a>
                </div>
                <div className="image">
                    <img src="Images\deal-img.jpg" alt="" />
                </div>
            </section>
            <section className="reviews" >
                <h1 className="heading"><span>client's reviews</span></h1>

                <div className="swiper">
                <Swiper
                watchSlidesProgress={true}
                autoplay={{
                    delay:3500,
                    disableOnInteraction:false
                }}
                modules={[Autoplay]}
                className="reviews-slider"
                {...SwiperOptionsTwo}
                >
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="Images\pic-5.png" alt=""/>
                            <h3>Emmanuel</h3>
                            <p>
                                ReadHaven is a warm, well-stocked bookstore 
                                with friendly staff and a cozy café. 
                                Great selection and atmosphere—perfect for any book lover!
                            </p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="Images\pic-6.png" alt=""/>
                            <h3>Virginia</h3>
                            <p>
                                ReadHaven is a warm, well-stocked bookstore 
                                with friendly staff and Great selection 
                                and atmosphere—perfect for any book lover!
                            </p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="Images\pic-1.png" alt=""/>
                            <h3>Joy</h3>
                            <p>
                                ReadHaven is a warm, well-stocked bookstore 
                                with friendly staff and Great selection 
                                and atmosphere—perfect for any book lover!
                            </p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="Images\pic-2.png" alt=""/>
                            <h3>Mary Ann</h3>
                            <p>
                                ReadHaven is a warm, well-stocked bookstore 
                                with friendly staff and Great selection and 
                                atmosphere—perfect for any book lover!
                            </p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="Images\pic-3.png" alt=""/>
                            <h3>Joseph</h3>
                            <p>
                                ReadHaven is a warm, well-stocked bookstore 
                                with friendly staff and Great selection and 
                                atmosphere—perfect for any book lover!
                            </p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="Images\pic-4.png" alt=""/>
                            <h3>Catherine</h3>
                            <p>
                                ReadHaven is a warm, well-stocked bookstore 
                                with friendly staff and Great selection and 
                                atmosphere—perfect for any book lover!
                            </p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                
                </Swiper>
                </div>
            </section>
            <section className="blogs" id="blogs">
                <h1 className="heading">our blogs</h1>
                <div className="swiper">
                    <Swiper
                      watchSlidesProgress={true}
                       autoplay={{
                        delay:3500,
                        disableOnInteraction:false,
                       }}
                      modules={[Autoplay]}
                      className="blogs-slider"
                      {...SwiperOptionsTwo}
                    >
                    </Swiper>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <div className="image">
                            <img src="Images\blog-1 (1).jpg" alt=""/>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>**ReadHaven brings the bookstore to you, 
                                    with endless genres, personalized recommendations, and fast shipping. 
                                </p>
                                <a href="\#" className="btn">read more</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <div className="image">
                                <img src="Images\try.png" alt=""/>
                            </div>
                            <div className="content">
                              <h3>blog title goes here</h3>
                              <p>**ReadHaven brings the bookstore 
                                with endless genres, personalize
                               </p>
                               <a href="\#" className="btn">read more</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <div className="image">
                                <img src="Images\blog-5.jpg" alt=""/>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>**ReadHaven brings the bookstore 
                                    with endless genres, personalize
                                </p>
                                <a href="\#" className="btn">read more?</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <div className="image">
                                <img src="Image/blog-4.jpg" alt=""/>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>**ReadHaven brings the bookstore 
                                    with endless genres, personalize
                                </p>
                                <a href="\#" className="btn">read more</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </section>
        </div>
        
    );
}

export default Home;
