import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import styles from "../Contact/Contact.module.css"
import Email from '../Email/Email';
import Loader from './Loader';


const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const form = useRef();
    const reset = useForm()

    const sendEmail = (e) => {
      e.preventDefault();
      setIsSending(true);
  
      emailjs
        .sendForm('service_jzozji5', 'template_0xalgzl', form.current, {
          publicKey: 'YPbKecnugODB4j5JS',
        })
        .then(
          () => {
            setIsSending(false);
            setIsSubmitted(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setIsSending(false)
          },
        );
    };

  return (
    <div>
      {isSubmitted ? <Email/> : (<>{isSending ? (<div className={styles.send}><h2>Sending...</h2><Loader/></div>) :(
    <div className={styles.contact} id='contact'>
        <h2 className={styles.heading}>Contact <span>Me</span></h2>
        <form ref={form} onSubmit={sendEmail}>
            <div className={styles.inputgroup}>
                <div className={styles.inputbox}>
                    <input type="text" placeholder='Full Name' name='from_name' required/>
                    <input type="email" placeholder='Email'  name='from_email' required/>
                </div>
                <div className={styles.inputbox}>
                    <input type="number" placeholder='Phone(Optional)' name='from_contact'/>
                    <input type="text" placeholder='Subject' name='from_subject'/>
                </div>
            </div>
            <div className={styles.inputgroup2}>
                <textarea name="message" id="" cols='30' rows='10' required placeholder='Your Message'></textarea>
                <input type="submit" onClick={()=> reset()} value = "Send Message" className={styles.btn} />
            </div>
        </form>
    </div>
      )
    }
    </>
      )
}
    </div>
    
  )
}



export default Contact;