import React from "react";
import "./Cards.css";

function Cards(pokemons) {
    return (
        <div className='cards'>
            {/* {console.log("in cards?:", pokemons.pokemons)} */}

            {pokemons.pokemons.sort((a, b) => a.id > b.id ? 1 : -1).map(function (pokemon) {
                return (
                    <div className='eachcards' key={pokemon.id}>
                        <div>
                            <img className='pokeimage' alt={"pokemon"} src={pokemon.image}></img>
                        </div>
                        <div className="pokecircle">
                        </div>
                        <div>
                            <h6></h6>
                        </div>
                    </div>
                )
            })
            }

        </div>
    )
};

export default Cards;
