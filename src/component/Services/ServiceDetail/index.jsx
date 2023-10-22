import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image1 from '../../../Assets/Image/banner5.jpg'
import './style.scss'

const ServiceDetail = () => {
    const navigate = useNavigate()
    const HandleBack = () => {
        navigate(-1)
    }
    return (
        <div className='Service_detail_main'>
            <button className='back_btn' onClick={() => HandleBack()}>&#8592; back</button>
            <h1 className='Services_heading'>OK, You Are a Tough One</h1>
            <p className='Services_sub_heading'>You scrolled this far. That's impressive! We are happy to give you even more useful content.</p>
            <figure className='section_img_main'>
                <img src={Image1} alt="section img" />
            </figure>
            <p className="service_detail_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta aspernatur possimus aliquam ipsam aut, suscipit ratione sit reprehenderit nemo cumque. Iure expedita harum est ducimus maiores recusandae, possimus facere?</p>
            <p className="service_detail_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta aspernatur possimus aliquam ipsam aut, suscipit ratione sit reprehenderit nemo cumque. Iure expedita harum est ducimus maiores recusandae, possimus facere?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad labore architecto eaque at pariatur delectus enim voluptate vitae assumenda. Nemo necessitatibus asperiores eveniet libero adipisci rerum voluptas voluptates a. Fugit delectus, culpa quis eum nulla veniam assumenda commodi quaerat explicabo libero nostrum, natus modi mollitia, atque repellendus quia illo aut.</p>
            <p className="service_detail_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta aspernatur possimus aliquam ipsam aut, suscipit ratione sit reprehenderit nemo cumque. Iure expedita harum est ducimus maiores recusandae, possimus facere?</p>
        </div>
    )
}

export default ServiceDetail;