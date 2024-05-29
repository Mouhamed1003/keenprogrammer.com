import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Coeur from '../coeur/Coeur';
import { FaXTwitter } from "react-icons/fa6";
import imgUNDRAW from '../../images/undraw_programming_re_kg9v.svg';

import './footer.css';

const Footer = () => {

  return (
    <section id='footer'>
      <a href='#footer' className='footer_logo' >TO KEEN PROGRAMMER</a>
      
      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#apropos'>A propos</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contacts</a></li>
        <li><a href='#footer'>Mentions légales</a></li>
        <li><a href='#footer'>Politiques de confidentialité</a></li>
      </ul>

      <div className='footer_socials'>
        <a id='a1' href="https://www.linkedin.com/in/mohamadou-diouf-974b90218/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a id='a2' href="https://github.com/Mouhamed1003/keenprogrammer.com" target='_blank' rel="noreferrer"><FaGithubSquare /></a>
        <a id='a3' href="https://web.facebook.com/profile.php?id=100009399596087" target='_blank' rel="noreferrer"><FaFacebook /></a>
        <a id='a4' href="https://www.instagram.com/ammethdiouf/" target='_blank' rel="noreferrer"><FaInstagram /></a>
        <a id='a5' href="https://x.com/MOHAMADOUDIOUF1" target='_blank' rel="noreferrer"><FaXTwitter /></a>
        <a id='a6' href="https://whatsapp.com" target='_blank' rel="noreferrer"><FaWhatsapp /></a>
        <a id='a7' href="https://t.me/Mouhameth_Diouf1003" target='_blank' rel="noreferrer"><FaTelegram /></a>
      </div>
      <div className="img_UNDRAW">
        <img src={imgUNDRAW} alt="img-UNDRAW-en-svg" className="imgsvg imgsvgleft" />
        <img src={imgUNDRAW} alt="img-UNDRAW-en-svg" className="imgsvg imgsvgcenter" />
        <img src={imgUNDRAW} alt="img-UNDRAW-en-svg" className="imgsvg imgsvgright" />
      </div>
      <Coeur/>
      <div className='footer_copyright'>
        <small><i>&copy; Copyright,</i> <b>2024 keenprogrammer.com </b>. Tous droits réservés.</small>
      </div>
    </section>
  );
}

export default Footer;
