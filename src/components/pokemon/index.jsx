import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams,
  withRouter,
} from "react-router-dom";

export const Pokemon = () => {

  const [pokemon, setPokemon] = useState({});
  let { pokemonId } = useParams();

  useEffect(() => {
    const getPokemonDetails = async (name) => {
      const response = await axios.get(
        process.env.REACT_APP_BASEURL + "pokemon/" + pokemonId
      );
      setPokemon(response.data);
    };
    getPokemonDetails();
  }, [pokemonId]);

  const { species, sprites } = pokemon;
  const { front_default } = sprites || {};
  console.log(front_default);
  
  const Loading = <div> Loading... </div>;

  if (front_default === undefined) {
    return Loading;
  }

  return (
    <div>
      <img src={front_default} alt={species.name} height='200px' width='200px' />
    </div>
  );
};

export default withRouter(Pokemon);
