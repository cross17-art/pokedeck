import { useState } from 'react';
import '../../assets/css/App.scss';


const card = ({car}) =>{
  return (
    <div className="listCharacters__item">
        <div className="listCharacters__item-title" id="Kuromi">
            <p>{car.name}</p>
        </div><img className="listCharacters__item-img" src={car.src} alt="Kuromi" />
    </div>
  );
};

export default card;
