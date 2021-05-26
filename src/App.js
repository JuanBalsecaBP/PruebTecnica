import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import Grid from '@material-ui/core/Grid';


function App() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {

    const setPokemon = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon"
      try {
        const response = await axios.get(url)
        setPokemonData(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    setPokemon()
    console.log(pokemonData)
  }, [])

  return (
    <Grid container >
      <Grid
        container
        justify="center"
        alignItems="center"
        display="blocks"
        spacing="2"
        style={{width: "70%"}}>

        {
          pokemonData.map((specificPokemon, index) => {
            const { name } = specificPokemon
            return (
              <Grid item xs={3}>
                <PokemonCard
                  urlImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                  id={index}
                  name={name} />
              </Grid>)
          })
        }
      </Grid>
    </Grid>
  );
}

export default App;
