import React from "react";
import "./coeur.css";

const Coeur = () => {
return (
    <div>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg5"
        version="1.1"
        viewBox="-5 -5 278 56"
        width="300"
        height="190"
    >
        <defs>
        <filter id="blur">
            <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <filter id="text-shadow">
            <feDropShadow dx="1" dy="1" stdDeviation="3" flood-color="rgb(227, 13, 113)" />
        </filter>
        </defs>
        <g id="layer1" transform="translate(29.1 -120.42)"> {/* Ajustez cette valeur pour descendre */}
        <path
            id="line"
            d="M-28.73 167.2c26.43 9.21 68.46-9.46 85.45-12.03 18.45-2.78 32.82 4.86 28.75 9.83-3.82 4.66-25.77-21.18-14.81-31.5 9.54-8.98 17.64 10.64 16.42 17.06-1.51-6.2 2.95-26.6 14.74-22.11 11.7 4.46-4.33 49.03-15.44 44.08-6.97-3.1 15.44-16.26 26.1-16 23.03.56 55.6 27.51 126.63 3.36"
            pathLength="1"
            filter="url(#text-shadow)" /* Apply the text shadow filter */
          />
        </g>
        <g id="layer2" transform="translate(29.1 -127.42)">
          <path
            filter="url(#blur)"
            id="point"
            d="M-28.73 167.2c26.43 9.21 68.46-9.46 85.45-12.03 18.45-2.78 32.82 4.86 28.75 9.83-3.82 4.66-25.77-21.18-14.81-31.5 9.54-8.98 17.64 10.64 16.42 17.06-1.51-6.2 2.95-26.6 14.74-22.11 11.7 4.46-4.33 49.03-15.44 44.08-6.97-3.1 15.44-16.26 26.1-16 23.03.56 55.6 27.51 126.63 3.36"
            pathLength="1"
        />
        </g>
    </svg>
    </div>
    );
};

export default Coeur;
