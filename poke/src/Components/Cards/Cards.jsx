import React from "react";
import "./Cards.css";

function Cards(pokemons) {
    return (
        <div className='cards'>
            {/* {console.log("in cards?:", pokemons.pokemons)} */}

            {pokemons.pokemons.sort((a, b) => a.id > b.id ? 1 : -1).map(function (pokemon) {
                return (
                    <div className='eachcards' key={pokemon.id}>
                        <img className='pokeimage' alt={"pokemon"} src={pokemon.image}></img>
                    </div>
                )
            })
            }

        </div>
    )
};

export default Cards;
