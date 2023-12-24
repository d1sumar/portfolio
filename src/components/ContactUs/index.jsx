import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactInp, ContactTextMessage, Submit } from './style';

export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      e.target.reset()
  
      emailjs.sendForm('service_8n50qvj', 'template_hbw471q', form.current, 'ZuvjYbLAFZmaqFTiR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <ContactInp placeholder='Name' type="text" name="user_name" />
            <ContactInp placeholder='Email' type="email" name="user_email" />
            <ContactTextMessage placeholder='Message' name="message" />
            <Submit type="submit" value="Send" />
        </form>
    )
}