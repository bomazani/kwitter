import React from 'react';
import Lemur from "../images/KwitterBackground.jpg";
// import Lemur from "../images/KwitterLemurs.jpg";


console.log(Lemur);

function Header() {
    return <img id="Lemur" src= {Lemur} alt="Lemurs"/>;
}

export default Header;