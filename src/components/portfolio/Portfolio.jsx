import React from 'react'
import './portfolio.css'
import IMG1 from '../../images/App_Manager_System.jpg'
import IMG2 from '../../images/portfolio2.jpg'
import IMG3 from '../../images/portfolio3.jpg'
import IMG4 from '../../images/portfolio4.jpg'
import IMG5 from '../../images/portfolio5.png'
import IMG6 from '../../images/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Application de Systeme de Gestion pour gerer des Taches a plusieurs actions possibles.',
    github: "https://github.com/Mouhamed1003/systeme-de-gestion-de-taches",
    demo: "https://mouhamed1003.github.io/systeme-de-gestion-de-taches/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Une application de gestion de produits construite avec React. Elle permet aux utilisateurs de gérer une liste de produits, de filtrer les produits par différentes catégories et de visualiser les détails de chaque produit.',
    github: "https://mouhamed1003.github.io/produit-manager/",
    demo: "https://github.com/Mouhamed1003/produit-manager"
  },
  {
    id: 3,
    image: IMG3,
    title: "Trousso d'interface utilisateur du tableau de bord Figma pour les applications Web.",
    github: "http://github.com",
    demo: "http://dribbble.com/alian_pixels"
  },
  {
    id: 4,
    image: IMG4,
    title: 'App mobile { Android et Apple } de tous mes projets web.',
    github: "http://github.com",
    demo: "http://dribbble.com/alian_pixels"
  },
  {
    id: 5,
    image: IMG5,
    title: "Projet de systeme d'embarquement aéroportière M6",
    github: "http://github.com",
    demo: "http://dribbble.com/alian_pixels"
  },
  {
    id: 6,
    image: IMG6,
    title: 'Maintien des tâches et suivi des progrès de conceptions de données informatiques',
    github: "http://github.com",
    demo: "http://dribbble.com/alian_pixels"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My personal projects</h5>
      <h2>Mes projets récements réalisés</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
          <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">
              Live demo</a>
            </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

