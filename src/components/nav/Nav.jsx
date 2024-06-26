import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { CgListTree } from "react-icons/cg";
import { MdSwipe } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";

import { useState } from 'react';
import { GrProjects } from "react-icons/gr";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');

  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome className="icons" /> </a>
      <a href="#apropos" onClick={() => setActiveNav('#apropos')} className={activeNav === '#apropos' ? 'active' : ''}><IoPersonSharp className="icons"  /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills className="icons"  /> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><GrProjects className="icons"  /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><CgListTree className="icons"  /> </a>
      <a href="#temoignages" onClick={() => setActiveNav('#temoignages')} className={activeNav === '#temoignages' ? 'active' : ''}><MdSwipe className="icons"  /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidMessageRounded className="icons"  /> </a>
    </nav>
    
  );
};

export default Nav;
