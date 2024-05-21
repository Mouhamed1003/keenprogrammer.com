// App.jsx
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Apropos from './components/a_propos/Apropos';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Temoignages from './components/temoignages/Temoignages';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ColorPicker from './components/colorpicker/ColorPicker';


import './index.css'; // Importez le fichier CSS global

const App = () => {
    return (
        <>
            <Header className="shadowed" />
            <ColorPicker className="shadowed" />
            <Nav className="shadowed" />
            <Apropos className="shadowed" />
            <Experience className="shadowed" />
            <Services className="shadowed" />
            <Portfolio className="shadowed" />
            <Temoignages className="shadowed" />
            <Contact className="shadowed" />
            <Footer className="shadowed" />
        </>
    );
};

export default App;
