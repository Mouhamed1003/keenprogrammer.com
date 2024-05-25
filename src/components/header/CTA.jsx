import React from 'react'
import CV from '../../images/moncv.pdf';
import { CgSoftwareDownload } from "react-icons/cg";
import { BiSolidMessageRounded } from "react-icons/bi";

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className='btn' target='_blank' rel='noreferrer'>Download My CV <CgSoftwareDownload className='icon-load'/> </a>
        <a href="#contact" className='btn btn-primary'>Talk me about... <BiSolidMessageRounded className='icon-load'/></a>
    </div>
  )
}

export default CTA
