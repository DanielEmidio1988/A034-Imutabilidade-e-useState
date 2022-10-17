import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'
// import { useState } from 'react'



const PokemonCard = (props) => {

    const evoluirPokemon = (pokemonID, pokemonEvolved) => {
      
      if(pokemonID === 0 && !pokemonEvolved){

        props.setPokemon({
        ...props.pokemon,
        name: "Pikachu",
        evolved: true,
        weight: 6,
        image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
        id: 25
        }, 
        )

      }else if (pokemonID === 58 && !pokemonEvolved){

          props.setPokemon({
          ...props.pokemon,
          name: "Arcanine",
          type: "Fire",
          evolved: true,
          weight: 155,
          color: 'orangered',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b8/059Arcanine.png/250px-059Arcanine.png',
          id: 59
  
          })

      }
      
    //   props.setPokemon({
    //       ...props.pokemon,
    //     name: "Pikachu",
    //     evolved: true,
    //     weight: 6,
    //     image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
    //     id: 25
    //     }, 
    //     )

    //     props.setPokemon({
    //       ...props.pokemon,
    //       name: "Arcanine",
    //       type: "Fire",
    //       evolved: true,
    //       weight: 155,
    //       color: 'orangered',
    //       image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b8/059Arcanine.png/250px-059Arcanine.png',
    //       id: 59
  
    //       })
        console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon(props.pokemon.id, props.pokemon.evolved)}>Evoluir!</EvolveButton>
    </Card>

    // <Card color={props.pokemon2.color}>
    //   <img src={props.pokemon2.image} alt={`Pokemon`}/>
    //   <PokemonName>{props.pokemon2.name}</PokemonName>
    //   <PokemonType>{props.pokemon2.type}</PokemonType>
    //   <p>{props.pokemon2.weight}kg</p>

    //   <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    // </Card>


  )
}

export default PokemonCard