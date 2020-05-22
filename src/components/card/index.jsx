import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const Pokemon = () => {
  // const baseURL = process.env.REACT_APP_BASEURL;

  const history = useHistory();
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        process.env.REACT_APP_BASEURL + `pokemon`
      );
      const data = response.data.results;
      setPokemon(data);
      console.log(data);
    };
    getData();
  }, []);
  return pokemon.map((item, index) => (
    <Card key={index}>
      <CardHeader title={item.name} subheader="type : plant" onClick={()=> history.push(item.name) } />
      <CardMedia image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} style={{width: '200px', height: '200px'}} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  ));
};

export default withRouter(Pokemon);
