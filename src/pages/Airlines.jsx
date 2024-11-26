import React from 'react';
import images from '../assets/imagen';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Airlines.css'

import signUp from './Singup.jsx'
import Signup from './Singup.jsx';

function Airlines() {
  //Cambiar color de background al momento de dar click
  const [bgColor, setBgColor] = useState(null);
  //Mostrar opciones de menu
  const [options, setOptions] = useState(false);

  //Mostrar signUp
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    document.title = "Airlines";
  }, []);

  const handleChange = (item) => {
    setBgColor(item);
  };

  const handleClick = () => {
    setOptions(!options);
  }

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  }



  return (
    <div className='container'>
      <div className="header">
        <div className='header-logo'>
          <img className='menu' width={20} height={15} src={images.menu} alt="" onClick={handleClick} />
          <h1>Airlines</h1>
        </div>
        <div className='header-login'>
        <span onClick={handleToggleSignUp}>Iniciar sesion</span>
        <span >Registrarse</span>
    </div>
      </div>
      <div className={`navigator-content ${options ? 'collapsed' : 'expanded'}`}>
        <div className='navigator-content-options'>
          <ul>
            <li className={`vuelo ${bgColor === 'vuelo' ? 'bgColor' : ''}`} onClick={() => (handleChange('vuelo'))}>
              <img width={20} height={20} src={images.avion} alt="" />
              {!options && <p>Vuelos</p>}
            </li>

            <li className={`alojamientos ${bgColor === 'alojamientos' ? 'bgColor' : ''}`} onClick={() => handleChange('alojamientos')}>
              <img width={20} height={20} src={images.cama} alt="" />
              {!options && <p>Alojamientos</p>}
            </li>
          </ul>
        </div>
      </div>
      {showSignUp && (
          <div className='sign-up'>
            <Signup onClose={handleToggleSignUp} />
          </div>
        )}
    </div>
  );
}

export default Airlines;
