import Headers from './Headers'
import Grid from './Grid'
import ModalView from "./Modal";
import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';


export default function Pokemondex() {

  // stati 
  const [pokemon, setPokemon] = useState([])
  const [query, setQuery] = useState('')
  const [selectPokemon, setSelectPokemon] = useState(null)

  // effetti 
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=300')
      .then(res => setPokemon(res.data.results))
  }, []);



  // funzioni 
  const handleSearch = e => {
    e.preventDefault()
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
      .then(res => setSelectPokemon(res.data))
  }

  const handleCloseModal = () =>{
    setSelectPokemon(null);
  }

  return (
    <div>
      <Headers setQuery={setQuery} handleSearch={handleSearch} />
      <Grid pokemon={pokemon} query={query.toLowerCase()} />
      <ModalView selectPokemon={selectPokemon} handleCloseModal={handleCloseModal}/>
    </div>
  )
}