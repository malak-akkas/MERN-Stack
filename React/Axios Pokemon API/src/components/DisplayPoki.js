import axios from "axios";
import React, {useState} from "react";



const DisplayPoki = (props) => {
    const [pokemon , setpokemon] = useState([]);

const Showpika=(e) => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=0&offset=807')
            .then(res=> console.log (res))
            // poki => setpokemon(poki.data.results)
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
