import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
import Show from "./Show"
const Component1 = (props) => {

    const [getData,setData] = useState([]);
    
    
    useEffect(() => {
        console.log(props.typeVal)
        axios.get("https://swapi.dev/api/"+props.typeVal+"/"+props.cmpId).then(resopnse=>{
        console.log(resopnse.data);
        setData(resopnse.data);
    })
    }, [props.typeVal,props.cmpId]);
    

    return (
        <div>
            <Show results={getData} info={props.typeVal}/>
        </div>
    )
}

export default Component1


