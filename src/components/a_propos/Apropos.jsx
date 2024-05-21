import React from 'react';
import './a_propos.css';
import MOI from '../../images/moi2.png';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const Apropos = () => {
  return (
    <section id='apropos' className='apropos'>
      <h5>Faisons connaissance</h5>
      <h2>About me</h2>

      <div className="container apropos_container">
        <div className="apropos_moi">
          <div className="apropos_moi-image">
            <img src={MOI} alt="ma2emephoto" />
          </div>
          <span className='my_nationality'>Un peuple, un but, une foi.</span>
          <span className="etoile" style={{ fontSize: "1.5em" }}>★</span>
        </div>
        <div className="apropos_content">
          <div className="apropos_cards">
            <article className="apropos_card">
              <FaAward className='apropos_icon'/>
              <strong>Expériences</strong>
              <small>+5 ans d'expérience</small>
            </article>
            <article className="apropos_card">
              <FiUsers className='apropos_icon'/>
              <strong>Clients</strong>
              <small>+200 à travers le monde</small>
            </article>
            <article className="apropos_card">
              <VscFolderLibrary className='apropos_icon'/>
              <strong>Projets</strong>
              <small>+80 complétés</small>
            </article>
          </div>
          <p className='permettre-selection'>
          En tant qu'étudiant en master d'ingénierie informatique, 
          j'ai eu l'opportunité de contribuer à des projets diversifiés pour 
          des entreprises renommées Internationale implantées au Maroc.
          <br></br>
          <br></br>
          Ces expériences m'ont permis de participer activement à plus de 80 projets variés, 
          allant de la conception de sites web dynamiques à la création de systèmes 
          de gestion de bases de données complexes.
          </p>
          <a href="#contact" className='btn btn-primary'>Parlons-en</a>
        </div>
      </div>
    </section>
  );
}

export default Apropos;
