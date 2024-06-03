import React, { useState } from 'react';
import './nav.css';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { CgListTree } from "react-icons/cg";
import { MdSwipe } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";

const Nav = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <nav>
      <Link to="/" onClick={() => handleNavClick('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome /></Link>
      <Link to="/apropos" onClick={() => handleNavClick('/apropos')} className={activeNav === '/apropos' ? 'active' : ''}><IoPersonSharp /></Link>
      <Link to="/experience" onClick={() => handleNavClick('/experience')} className={activeNav === '/experience' ? 'active' : ''}><GiSkills /></Link>
      <Link to="/services" onClick={() => handleNavClick('/services')} className={activeNav === '/services' ? 'active' : ''}><GrProjects /></Link>
      <Link to="/portfolio" onClick={() => handleNavClick('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''}><CgListTree /></Link>
      <Link to="/temoignages" onClick={() => handleNavClick('/temoignages')} className={activeNav === '/temoignages' ? 'active' : ''}><MdSwipe /></Link>
      <Link to="/contact" onClick={() => handleNavClick('/contact')} className={activeNav === '/contact' ? 'active' : ''}><BiSolidMessageRounded /></Link>
    </nav>
  );
};

export default Nav;
