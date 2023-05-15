import { useState } from "react";
import "../../../assets/css/App.scss";

import PokemonAbilities from "./pokemon-abilities";
import PokemonStats from "C:/Users/Nine/Desktop/vite-template-react-main (2)/vite-template-react-main/src/components/screens/pokemons/pokemon-stats";

const pokemonText = ({ whichText,pokemonInfo }) => {

  return (
    <div>
      {whichText? (
        <PokemonAbilities abilities={pokemonInfo.abilities} />
      ) : (
        <PokemonStats
          key=""
          stat={pokemonInfo.stat}
          weight={pokemonInfo.weight}
          height={pokemonInfo.height}
        />
      )}
    </div>
  );
};

export default pokemonText;
