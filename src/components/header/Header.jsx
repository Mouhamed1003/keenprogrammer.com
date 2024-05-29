import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import MAPHOTO from '../../images/moi2.png';
import IMGSVG1 from '../../images/undraw_version_control_re_mg66.svg';
import IMGSVG2 from '../../images/undraw_bear_market_ania.svg';
import HeaderSocials from './HeaderSocials';
import { PiArrowFatLinesRightFill } from "react-icons/pi";
// import { FcApproval } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import Coeur from '../coeur/Coeur';


const Header = () => {
  const [rotationDegree, setRotationDegree] = useState(0);
  const [typedName, setTypedName] = useState('');

  //ecriture automatique de mon nom
  useEffect(() => {
    const name = 'DIOUF MOHAMADOU';
    let currentIndex = 0;
    let timeoutId;
  
    const animateName = () => {
      if (currentIndex <= name.length) {
        setTypedName(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId); // Arrêter l'animation
        timeoutId = setTimeout(() => {
          currentIndex = 0; // Réinitialiser l'index pour recommencer
          intervalId = setInterval(animateName, 250); // Recommencer après 250 ms
        }, 1000); // Pause d'une minute avant de recommencer
      }
    };
  
    let intervalId = setInterval(animateName, 250);
  
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
  

// rotation de l'icon react
useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationDegree(rotationDegree => (rotationDegree + 5) % 360);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='header'>
    <header>
      <div className="container header_container">
        <h3>Hello Everyone<FaHandHoldingHeart />, I'm</h3>
        <h1><span><IoSparklesSharp/><FaHandHoldingHeart /> {"{ "}</span>{typedName}<span>{" }"} <FaHandsHelping /> </span></h1>
        <h5 className="text-light-function">FullStack Developer Engineer</h5>
        <div className="icons">
            <FaReact size={80} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={50} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={40} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={30} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={40} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={50} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={80} style={{ transform: `rotate(${rotationDegree}deg)` }} />
          </div>
        <CTA />
        {" "}
        <div className='maphoto'>
          <img src={MAPHOTO} alt="maphoto" />
        </div>
        <div className="icons">
            <FaReact size={30} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={30} style={{ transform: `rotate(${rotationDegree}deg)` }} />
          </div>&nbsp;
          <div className="icons">
            <FaReact size={30} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={30} style={{ transform: `rotate(${rotationDegree}deg)` }} />
          </div>&nbsp;
          <div className="icons">
            <FaReact size={30} style={{ transform: `rotate(${rotationDegree}deg)` }} />
            <FaReact size={30} style={{ transform: `rotate(${rotationDegree}deg)` }} />
          </div>
        <div className="img_svg1et2_header">
          <img src={IMGSVG1} alt="img_svg1_header1"/>
          <img src={IMGSVG2} alt="img_svg1_header2"/>
        </div>
          <Coeur/>
          <HeaderSocials/>
          <a href="#footer" className='scroll_down pulse'>Scroll Down---<PiArrowFatLinesRightFill /></a>
      </div> 
    </header>
    </section>
  )
}

export default Header;
