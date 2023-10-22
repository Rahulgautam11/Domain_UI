import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Home from './component/Home'
import Layout from './component/Layout'
import Services from './component/Services'
import ServiceDetail from './component/Services/ServiceDetail'

const ComponentRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/contact' Component={Contact} />
                    <Route path='/services' Component={Services} />
                    <Route path='/service-detail' Component={ServiceDetail} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default ComponentRoutes