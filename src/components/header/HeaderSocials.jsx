import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://facebook.com" target='_blank' rel="noreferrer"><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials