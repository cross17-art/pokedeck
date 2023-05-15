import { useEffect, useState } from 'react';
import { cards } from '../../../assets/js/index';

import Card from 'C:/Users/Nine/Desktop/vite-template-react-main (2)/vite-template-react-main/src/components/screens/pokemons/pokemon-list.jsx';

const Home = () => {

  return (
    <div className="container"> 
      
       <div className="listCharacters">
            {cards.map(card =>(
                <Card key={card.name} card={card} />
            ))}            
        </div>

     
    </div>
  );
};

export default Home;
