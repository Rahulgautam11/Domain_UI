import React from 'react'
import './style.scss'
import Searchbar from '../../../common/Searchbar/Searchbar';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const DomainData = [
    { name: "me", about: "The perfect place to showcase who you are and what you're all about.", price: "Starting at $3.99/first year*" },
    { name: "com", about: "The perfect place to showcase who you are and what you're all about.", price: "Starting at $5.99/first year*" },
    { name: "io", about: "The perfect place to showcase who you are and what you're all about.", price: "Starting at $1.99/first year*" },
    { name: "store", about: "The perfect place to showcase who you are and what you're all about.", price: "Starting at $2.99/first year*" },
    { name: "blog", about: "The perfect place to showcase who you are and what you're all about.", price: "Starting at $6.99/first year*" },
    { name: "ed", about: "The perfect place to showcase who you are and what you're all about.", price: "Starting at $8.99/first year*" }
]
const ServiceList = () => {

    useEffect(() => {
        Aos.init({ duration: 1200, });
    }, [])

    return (
        <div className='services_list_container'>
            <h1 className='Services_heading'>START WITH THE PERFECT DOMAIN</h1>
            <p className='Services_sub_heading'>With more than 300 domain extensions, you'll find the one that fits just right.</p>

            <div className="card_container">
                {
                    DomainData.map((item, key) => {
                        return (
                            <div className="card_Services" data-aos="slide-up" key={key}>
                                <h3 className="domain_name"><span>.</span>{item.name}</h3>
                                <p className="domain_about">{item.about}</p>
                                <p className="domain_price">{item.price}</p>
                                <Searchbar
                                    placeholder={`Search .${item.name} domain`}
                                    radius={true}
                                />
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default ServiceList;