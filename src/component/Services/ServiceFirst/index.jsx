import React, { useEffect } from 'react'
import './style.scss'
import Image1 from '../../../Assets/Image/banner5.jpg'
import Image2 from '../../../Assets/Image/banner6.jpg'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'

const ServicesFirst = () => {
    const navigate = useNavigate()
    useEffect(() => {
        Aos.init({ duration: 1200, });
    }, [])
    const HandleService = () => [
        navigate("/service-detail")
    ]
    return (
        <div className='service_first_container'>
            <h1 className='Services_heading'>OK, You Are a Tough One</h1>
            <p className='Services_sub_heading'>You scrolled this far. That's impressive! We are happy to give you even more useful content.</p>
            <div className="section_wrap">
                <figure className='section_img_main'>
                    <img src={Image1} alt="section img" />
                </figure>
                <div className="section_caption">
                    <h3 className='caption_heading' data-aos="flip-right">You Purchased a Domain, Now What?</h3>
                    <p className='caption_sub_heading' data-aos="fade-right">Still confused on what to do after successfully registering your domain? Time to get your online store up and running. Follow these simple steps to get started.</p>
                    <button data-aos="fade-right" onClick={() => HandleService()}>LEARN MORE</button>
                </div>
            </div>
            <div className="section_wrap">
                <div className="section_caption">
                    <h3 className='caption_heading' data-aos="flip-right">You Purchased a Domain, Now What?</h3>
                    <p className='caption_sub_heading' data-aos="fade-right">Still confused on what to do after successfully registering your domain? Time to get your online store up and running. Follow these simple steps to get started.</p>
                    <button data-aos="fade-right" onClick={() => HandleService()}>LEARN MORE</button>
                </div>
                <figure className='section_img_main'>
                    <img src={Image2} alt="section img" />
                </figure>

            </div>
        </div>
    )
}

export default ServicesFirst