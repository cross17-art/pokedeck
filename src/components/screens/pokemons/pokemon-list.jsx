import { useState, useEffect } from "react";
import "../../../assets/css/App.scss";
import PokemonInfo from "C:/Users/Nine/Desktop/vite-template-react-main (2)/vite-template-react-main/src/components/screens/pokemons/pokemon-info";

const pokemon = ({ card }) => {
  const [isOpen, setSate] = useState(false);

  const buttonHandler = () => {
    setSate((current) => !current);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="listCharacters_item">
      <button
        type="button"
        className="listCharacters_item-title"
        id={card.name}
        onClick={buttonHandler}
      >
        <p>{card.name}</p>
      </button>
      <img className="listCharacters_item-img" src={card.svg} alt={card.name} />

      {isOpen ? (
        <PokemonInfo
          key={card.name + "info"}
          pokemonInfo={card}
          buttonHandler={buttonHandler}
        />
      ) : null}
    </div>
  );
};

export default pokemon;
