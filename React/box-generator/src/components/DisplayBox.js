import react, { useState } from 'react';


const DisplayBox = (props) => {
    return (
        <div style = {{ display:'inline-flex'}}>
            {props.color.map ( value => <div style = {{ backgroundColor:value,
            width:'100px',
            height:'100px',
            }}> {value} </div>
            )
            }

        </div>
    );
};
    
export default DisplayBox;