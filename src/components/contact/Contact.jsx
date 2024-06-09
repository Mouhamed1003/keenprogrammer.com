import React, { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './contact.css'

/* partie empechement de coller dans les champs de textes*/
const handlePaste = (e) => {
  e.preventDefault();
};

/* Partie composant */
const Contact = () => {
/* Partie de la validation mail avec emailjs pour l'envoi du mail*/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r9gc31d', 'template_epruzdi', form.current, 'rabrB3fBZqOZJhpEm')
      .then(() => {
        toast.success('Votre message a été envoyé avec succès à M. DIOUF !');
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de l'envoi du message :", error);
        toast.error("Je vous prie de bien vouloir réessayer plus tard.");
      });
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Rentrons-en Contact</h2>

      <div className="container contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" onPaste={handlePaste}  placeholder="Votre nom et prénom..." required autoComplete="off"/>
          <input type="email" name="email" onPaste={handlePaste} placeholder="Votre Adresse mail..." required autoComplete="off"/>
          <textarea name="message" rows="8" onPaste={handlePaste} placeholder="Votre Message..." required ></textarea>
          <button type="submit" className="btnEnvoyer btn-primary">Envoyer le message</button>
          <button type="reset" className="btnEffacer btn-primary">Effacer tous les champs</button>
           {/* Partie position de la notification */}
          <ToastContainer className="custom-toast-container" />        
        </form>
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon1'/>
            <h4>E-mail</h4>
            <h6>Mohamadoudiouf20@gmail.com</h6>
            <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">M'envoyez un mail{" >"}</a>
          </article>
          <article className="contact_option">
            <FaTelegramPlane className='contact_option-icon3'/> <FaWhatsapp className='contact_option-icon4'/>
            <h4>Telegram/WhatsApp</h4>
            <h6>+212 649 17 36 72</h6>
            <a href="https://t.me/Mouhameth_Diouf1003" target="_blank" rel="noreferrer">Contact Me{" >"}</a>
          </article>
          <article className="contact_option">
            <FaSquareInstagram className='contact_option-icon2'/>
            <h4>Instagram</h4>
            <h6>Ammethdiœuf</h6>
            <a href="https://www.instagram.com/ammethdiouf/" target="_blank" rel="noreferrer">M'envoyez un message DM{" >"}</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact;
