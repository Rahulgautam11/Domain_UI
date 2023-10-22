import React from 'react'
import './style.scss'

const TextArea = ({ placeholder, label, rows }) => {
    return (
        <div className='form_TextArea_input_container'>
            <label className='label_input'>{label}</label>
            <textarea className='form_input' placeholder={placeholder} rows={rows} cols="50"></textarea>
        </div>
    )
}

export default TextArea