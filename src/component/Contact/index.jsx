import React from 'react'
import './style.scss'
import FormInput from '../../common/FormInput'
import TextArea from '../../common/TextArea'

const Contact = () => {
    return (
        <div className="contact_container">
            <h1 className='Contact_heading'>Get in Touch.</h1>
            <p className='Contact_sub_heading'>Get in touch. Having queries while creating your own website or planning to flourish professionally, talk to our experts.</p>
            <div className='contact_form_main'>
                <div className="form_wrap">
                    <FormInput
                        placeholder={"Enter your name"}
                        type={"text"}
                        label={"Name"}
                    />
                    <FormInput
                        placeholder={"Enter your Email"}
                        type={"email"}
                        label={"Email"}
                    />
                    <FormInput
                        placeholder={"Enter subject"}
                        type={"Text"}
                        label={"Subject"}
                    />
                    <TextArea
                        placeholder={"Write your message"}
                        label={"Message"}
                        rows={5}
                    />
                    <button>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Contact