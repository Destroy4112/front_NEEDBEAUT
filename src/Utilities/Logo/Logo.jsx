import React from 'react';
import imagenes from '../../Assets/Images/imagenes';

function Logo({ clase }) {
    return (
        <img src={imagenes.logo} className={clase} alt="Logo" />
    );
}

export default Logo;