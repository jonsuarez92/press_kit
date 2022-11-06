import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ContactForm.css"
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            {/* <div className='formContainer'>
                <div className='contactForm'>
                    <div>ContactForm</div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div> */}
            <div className='formContainer'>
                <div className='contactForm'>
                    <div style={{ textAlign: 'center' }}>Contact Me</div>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="user_name" placeholder=" Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="user_email" placeholder=" Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <textarea name="message" />

                        </Form.Group>
                        <Button value="Send" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ContactForm