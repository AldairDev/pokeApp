import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
  const baseURL = process.env.REACT_APP_BASEURL;
    const [pokemon, setPokemon] = useState([])
    
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(baseURL + "pokemon");
      const data = response.data.results;
      setPokemon(data)
      console.log(data);
    };
    getData();
  }, []);

  return <div>hola desde componente pokemon</div>;
};

export default Pokemon;
