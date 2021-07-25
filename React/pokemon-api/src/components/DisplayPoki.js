import React, {useState} from "react";



const DisplayPoki = (props) => {
    const [pokemon , setpokemon] = useState([]);

const Showpika=(e) => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=0&offset=807')
            .then(response => response.json())
            .then(poki => setpokemon(poki.results))
    };

    return (
        <div>

    <button onClick={Showpika}>  Fetch Pokemon  </button>

            {pokemon.map((pokemon, index)=>
            
            { return(<div key={index}>{pokemon.name}</div>)
            })} 
        </div>
    
    );
}
export default DisplayPoki;
