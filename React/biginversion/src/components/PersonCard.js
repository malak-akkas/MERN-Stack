
import React from 'react';

import personCss from './CSS/PersonCard.module.css';

const PersonCard = (props) => {
    return (
        <div className={personCss.hr}>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {props.age}</p>
            <p>HairColor: {props.hairColor}</p>
        </div>

    );
}

export default PersonCard