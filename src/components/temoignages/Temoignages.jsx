import React from 'react'
import './temoignages.css'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'
import AVTR5 from '../../images/maphoto3.png'

// import required modules
import { EffectCards } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';




const Temoignages = () => {
const data = [
    {
      id: 1,
      image: AVTR1,
      person: "Sophie Lefebvre",
      review: "Je suis tellement reconnaissante pour le travail incroyable de développement réalisé par l'équipe de ce site. Ils ont su comprendre mes besoins et ont dépassé mes attentes. En tant qu'ingénieur développeur fullstack moi-même, je peux dire avec certitude qu'ils sont vraiment professionnels et compétents."
    },
    {
      id: 2,
      image: AVTR2,
      person: "Ahmed Ibrahim",
      review: "Je suis impressionné par le niveau de compétence et de dévouement de l'équipe de ce site. Ils ont créé une solution personnalisée pour mon entreprise qui a considérablement amélioré notre efficacité et notre productivité. Je les recommande vivement à tous ceux qui recherchent des services de développement de haute qualité."
    },
    {
      id: 3,
      image: AVTR3,
      person: "David Cohen",
      review: "Je suis extrêmement satisfaite du travail réalisé par ce site. Leur approche professionnelle, leur attention aux détails et leur réactivité ont rendu le processus de développement fluide et agréable. Je les recommande sans hésitation à tous ceux qui ont besoin de services de développement fiables et de qualité."
    },
    {
      id: 4,
      image: AVTR4,
      person: "Fatima Mohammed",
      review: "Je suis ravi de recommander l'équipe de ce site à tous ceux qui recherchent des services de développement exceptionnels. Leur expertise technique et leur engagement envers la satisfaction du client sont vraiment impressionnants. Grâce à eux, j'ai pu concrétiser mon projet avec succès."
    },
    {
      id: 5,
      image: AVTR5,
      person: "Jacob Levi",
      review: "Je suis très reconnaissante envers l'équipe de ce site pour leur excellent travail. Ils ont su transformer mes idées en réalité avec une grande efficacité et professionnalisme. Leur expertise en développement web m'a permis d'atteindre mes objectifs commerciaux avec succès."
    },
    {
      id: 6,
      image: AVTR1,
      person: "Marie Dupont",
      review: "Le service fourni par cette équipe a été exceptionnel. Leur rapidité et leur professionnalisme ont fait de notre collaboration un véritable succès. Je recommande fortement leurs services."
    },
    {
      id: 7,
      image: AVTR2,
      person: "John Doe",
      review: "Travailler avec cette équipe a été une expérience formidable. Leur expertise et leur attention aux détails ont fait toute la différence dans notre projet. Je suis très satisfait du résultat final."
    },
    {
      id: 8,
      image: AVTR3,
      person: "Anna Smith",
      review: "Je suis ravie du site web qu'ils ont développé pour moi. Leur capacité à comprendre mes besoins et à les transformer en un produit fini de haute qualité est remarquable. Merci beaucoup pour votre travail incroyable !"
    },
    {
      id: 9,
      image: AVTR4,
      person: "Omar Sy",
      review: "Cette équipe a su répondre à mes attentes avec une grande efficacité. Leur professionnalisme et leur dévouement sont vraiment impressionnants. Je les recommande sans hésitation pour tout projet de développement."
    },
    {
      id: 10,
      image: AVTR5,
      person: "Emily Johnson",
      review: "Le résultat final a dépassé mes attentes. Leur expertise et leur créativité ont fait de notre collaboration un succès retentissant. Je suis très reconnaissante pour leur excellent travail."
    },
  ];

  return (
    <section id='temoignages'>
      <h5>Review from clients</h5>
      <h2>Quelques témoignages de mes clients</h2>
      <Swiper 
        className="container temoignages_container" 
        effect={'cards'} 
        grabCursor={true} 
        modules={[EffectCards]} 
      >
        {
          data.map(({id, image, title, person, review}) => {
            return (
              <SwiperSlide key={id} className="temoignage">
                <div className="client_avatar">
                  <img src={image} alt={title} />
                </div>
                <h3 className="client_name">{person}</h3>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Temoignages
