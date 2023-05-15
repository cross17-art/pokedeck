import { useState } from "react";
import "../../../assets/css/App.scss";

const pokemonAbilities = ({ abilities }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="pokemon">
      <div className="pokemon_stat">
        {abilities.map((element) => {
          return (
            <p className="pokemon_stat-text">
              <b>{element.name}</b> - {element.description}.{element.efect}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default pokemonAbilities;
