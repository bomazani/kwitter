import React from 'react';
import duck from "../images/kwitterduck.jpg";

console.log(duck);

function Header() {
    return <img src= {duck} alt="Flipping Duck"/>;
}

export default Header;