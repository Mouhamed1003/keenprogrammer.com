import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/mohamadou-diouf-974b90218/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Mouhamed1003" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://web.facebook.com/profile.php?id=100009399596087" target='_blank' rel="noreferrer"><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials
