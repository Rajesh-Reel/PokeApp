import React from "react";
import pokemonLogo from "../../assets/pokemon-logo.png";

function Header() {
    return(
        <img className={'Logo'} src={pokemonLogo} alt="pokemonLogo"></img>
    )
}

export default Header