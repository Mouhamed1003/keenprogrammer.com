// ColorPicker.jsx
import React, { useState } from 'react';
import './colorpicker.css';

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff'); // Couleur blanche par défaut pour le fond

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setSelectedColor(newColor);
        
         document.documentElement.style.setProperty('--color-bg', newColor);
         document.documentElement.style.setProperty('--color-bg-variant', newColor);
        //  document.documentElement.style.setProperty('--color-primary', newColor); // Couleur principale
         document.documentElement.style.setProperty('--color-primary-variant', newColor);
    };

    return (
        <div className="theme-picker shadowed">
            <input type="color" id="selectColorTheme" name="theme" value={selectedColor} onChange={handleColorChange} />
        </div>
    );
};

export default ColorPicker;
