import React from 'react'
import './style.scss'

const FormInput = ({ type, placeholder, label, className }) => {
    return (
        <div className={`form_input_container ${className}`}>
            <label className='label_input'>{label}</label>
            <input className='form_input' type={type} placeholder={placeholder} />
        </div>
    )
}

export default FormInput