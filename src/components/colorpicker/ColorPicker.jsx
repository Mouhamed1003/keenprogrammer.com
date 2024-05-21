// ColorPicker.jsx
import React, { useState } from 'react';
import './colorpicker.css';

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff'); // Couleur noire par défaut pour le fond

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setSelectedColor(newColor);

         // Mettre à jour les variables CSS personnalisées pour les couleurs, en ignorant la couleur du texte
         document.documentElement.style.setProperty('--color-bg', newColor); // Fond de la page
         document.documentElement.style.setProperty('--color-bg-variant', newColor); // Variante du fond
        //  document.documentElement.style.setProperty('--color-primary', newColor); // Couleur principale
         document.documentElement.style.setProperty('--color-primary-variant', newColor); // Variante de la couleur principale
         // Ajoutez d'autres variables CSS personnalisées selon vos besoins, en excluant les couleurs des textes
    };

    return (
        <div className="theme-picker shadowed"> {/* Ajouter la classe "shadowed" ici */}
            <input type="color" id="selectColorTheme" name="theme" value={selectedColor} onChange={handleColorChange} />
        </div>
    );
};

export default ColorPicker;
