import React from 'react'
import axios from 'axios';
export default props => {
    
    return (
        <div>
            {props.authors.map((author, idx)=>{
                return <p key={idx}>{author.name}</p>
            })}
        </div>
    )
}