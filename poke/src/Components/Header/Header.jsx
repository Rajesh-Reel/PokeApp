import React from "react";
import pokemonLogo from "../../assets/pokemon-logo.png";
import "./Header.css";

function Header() {
    return(
        <img className="logo" src={pokemonLogo} alt="pokemonLogo"></img>
    )
}

export default Header