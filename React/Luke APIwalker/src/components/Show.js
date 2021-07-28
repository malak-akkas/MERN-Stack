import React from 'react'
import {useState,useEffect} from 'react'
const Show = (props) => {

    // console.log(props.results);
    useEffect(() => {
        
    }, [props.results]);

    
    return (
    <div>{
        (props.info ==="people")?
        <div>
        <h1>{props.results.name}</h1>
        <p>Height: {props.results.height}</p>
        <p>Mass: {props.results.mass}</p>
        <p>Hair Color:{props.results.hair_color}</p>
        <p>Skin Color{props.results.skin_color}</p>
        </div>
        
    
        :  <div>
    <h1>{props.results.name}</h1>
    <p>Rotation Period: {props.results.rotation_period}</p>
    <p>Orbital Period: {props.results.orbital_period}</p>
    <p>Diameter:{props.results.diameter}</p>
    <p>Climate{props.results.climate}</p>

    </div>

            
        }
        </div>
    )
}

export default Show

