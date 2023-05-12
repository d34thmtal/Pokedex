import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './componenti/Header'
import Grid from './componenti/Grid'
import ModalView from './componenti/Modal'

function Pokedex(props) {
  //Stati
  const {onStateSwitch} = props
  const [pokemon, setPokemon] = useState([]); //gestisce il popolamento della grid
  const [query, setQuery] = useState(""); //gestisce la grid compilando l'input di ricerca
  const [selectedPokemon, setSelectedPokemon] = useState(null); //gestisce l'apertura del modale al click sulla card
  //Effetti
  useEffect(() => {
    axios 
        .get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then (res => setPokemon(res.data.results))
  }, []);

  //Funzioni
  const handleSearch = e => {
  e.preventDefault();
  axios 
    .get (`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
    .then (res => setSelectedPokemon(res.data));
  }

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  }


  return (
    <div>
        <Header query={query} setQuery={setQuery} handleSearch={handleSearch} onStateSwitch={onStateSwitch}/>
        <Grid pokemon={pokemon} query={query.toLowerCase()} setSelectedPokemon={setSelectedPokemon}  />
        <ModalView selectedPokemon={selectedPokemon} handleCloseModal={handleCloseModal} />
    </div>
  )
}

export default Pokedex