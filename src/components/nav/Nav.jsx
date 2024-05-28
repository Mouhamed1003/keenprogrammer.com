import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
// import { FaPhoenixFramework } from "react-icons/fa6";
import { BsHypnotize } from "react-icons/bs";
import { BiSolidMessageRounded } from "react-icons/bi";
import { SiGroupon } from "react-icons/si";
import { useState } from 'react';
import { GrProjects } from "react-icons/gr";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');

  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /> </a>
      <a href="#apropos" onClick={() => setActiveNav('#apropos')} className={activeNav === '#apropos' ? 'active' : ''}><IoPersonSharp /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills /> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BsHypnotize /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects /> </a>
      <a href="#temoignages" onClick={() => setActiveNav('#temoignages')} className={activeNav === '#temoignages' ? 'active' : ''}><SiGroupon /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidMessageRounded /> </a>
    </nav>
    
  );
};

export default Nav;
