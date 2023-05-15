import { useState,useEffect } from "react";
import "../../../assets/css/App.scss";

const pokemonStats = ({ stat, weight, height }) => {

  return (
    <div className="pokemon">
        <div className="pokemon_stat">
          <p className="pokemon_stat-text"><b>Weight:</b> {weight} cm</p>
          <p className="pokemon_stat-text"><b>Height:</b> {height} cm</p>
          {stat.map((element) => {
            return (
              
              <p className="pokemon_stat-text">
                <b>{element.stat.name.toUpperCase()}</b>:{element.base_stat}
              </p>
            );
          })}
        </div>

    </div>
  );
};

export default pokemonStats;
