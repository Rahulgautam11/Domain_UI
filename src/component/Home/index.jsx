import React from 'react'
import Banner from '../Banner'
import ServiceList from '../Services/ServicesList'
import ServicesFirst from '../Services/ServiceFirst'

const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceList />
            <ServicesFirst />
        </div>
    )
}

export default Home