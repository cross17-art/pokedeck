import { useState,useEffect } from "react";
import "../../../assets/css/App.scss";

import PokemonAbilities from "./pokemon-abilities";
import PokemonText from "./pokemon-text";
import PokemonStats from "C:/Users/Nine/Desktop/vite-template-react-main (2)/vite-template-react-main/src/components/screens/pokemons/pokemon-stats";

const pokemonInfo = ({ pokemonInfo, buttonHandler }) => {
  const [isText, setSate] = useState(false);

  useEffect(() => {
    if(isText){
      document.querySelector("#btn-abilities").classList+=' active'
      document.querySelector("#btn-stat").classList.remove('active')
    }else{
      document.querySelector("#btn-stat").classList+=' active'
      document.querySelector("#btn-abilities").classList.remove('active')
    }
  }, [isText])

 
  return (
    <div className="popup">
      <div className="popup_content">
        <button
          type="button"
          className="popup_content-close"
          onClick={buttonHandler}
        ></button>

        <p className="popup_content-title">{pokemonInfo.name}</p>
        <div className="popup_content-wrap">
          <img
            className="popup_content-img"
            src={pokemonInfo.svg}
            alt={pokemonInfo.name}
          />
          <div className="popup_content-btns">
            <button
              type="button"
              className="btn"
              onClick={() => setSate(true)} id="btn-abilities"
            >
              <span className="btn-span">Abilities</span>
            </button>

            <button
              type="button"
              className="btn" id="btn-stat"
              onClick={() =>setSate(false)}
            >
              <span className="btn-span">Stats</span>
            </button>
          </div>  


            <PokemonText key={"stats"} whichText={isText} pokemonInfo={pokemonInfo} />

          </div>
      </div>
    </div>
  );
};

export default pokemonInfo;
