"use client";
import React, { useEffect } from 'react'
import './Style.scss'
import Banner1 from '../../Assets/Image/banner1.jpg'
import Banner2 from '../../Assets/Image/banner2.jpg'
import Banner3 from '../../Assets/Image/banner3.jpg'
import Banner4 from '../../Assets/Image/banner4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Searchbar from '../../common/Searchbar/Searchbar';
import Aos from 'aos';


const Banner = () => {
    const ImageData = [{ img: Banner1 }, { img: Banner2 }, { img: Banner3 }, { img: Banner4 }]
    const settings = {
        direction: "horizontal",
        loop: true,
        effect: "Creative",
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        spaceBetween: 0,
        pagination: {
            clickable: true
        },
        slidesPerView: 1,
        modules: [EffectFade, Pagination, Mousewheel, Autoplay],
        keyboard: true

    }
    useEffect(() => {
        Aos.init({ duration: 1200, });
    }, [])

    return (
        <figure className={"banner_Main"}>
            <Swiper {...settings} className={"swiper"}>
                {
                    ImageData.map((item, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <img className={"Banner_img"} src={item.img} alt='banner-img' />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="banner_overlay" >
                <h1 className="banner_heading" data-aos="fade-left">It all starts with a domain.</h1>
                <h6 className="banner_sub_heading" data-aos="fade-left">Make your idea real. Claim your space online with a domain.</h6>
                <div className='search_bar_wrap' data-aos="fade-right">
                    <Searchbar
                        className={"banner_search_bar"}
                        placeholder={"Search Domain"}
                    />
                </div>
            </div>
        </figure>
    )
}

export default Banner