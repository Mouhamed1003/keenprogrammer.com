import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiAngular } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
// import { SiPython } from "react-icons/si";
import { BsGit } from "react-icons/bs";


const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <h5>Mes Experiences Professionnelles</h5>
      <h2>My Professionnal Experiences</h2>

      <div className="container experience_container">
            {/* Parti Front-End */}
        <div className="experience_front_end">
          <h3>Front-End Development</h3>
          <div className="experience_content">

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><RiJavascriptFill className='langue-icon1'/> JavaScript</h4>
              <small className='text-light'>Expert Level</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><FaReact className='langue-icon2'/> React</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><DiJqueryLogo className='langue-icon3'/> JQuery</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><SiAngular className='langue-icon4'/> Angular</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><SiHtml5 className='langue-icon5'/> HTML</h4>
              <small className='text-light'>Expert Level</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><IoLogoCss3 className='langue-icon6'/> CSS</h4>
              <small className='text-light'>Expert Level</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><SiTailwindcss className='langue-icon7'/> Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><FaBootstrap className='langue-icon8'/> Bootstrap</h4>
              <small className='text-light'>Expert Level</small>
            </div>
            </article>
          </div>
        </div>

        {/*Parti Back-End */}
        <div className="experience_backend">
          <h3>Back-End Development</h3>
          <div className="experience_content">
          
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><FaNodeJs className='langue-icon9'/> Node JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><SiMongodb className='langue-icon10'/> MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><SiNextdotjs className='langue-icon11'/> Next JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><SiPhp className='langue-icon12'/> PHP</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><FaLaravel className='langue-icon13'/> Laravel</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><SiMysql className='langue-icon14'/> MySQL</h4>
              <small className='text-light'>Expert Level</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <br/><h4><BsGit className='langue-icon15'/> Git / Github</h4>
              <small className='text-light'>Expert Level</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/> 
            <div>
            <br/><h4>JAVA <FaJava className='langue-icon16'/></h4>
              <small className='text-light'>Expert Level</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
