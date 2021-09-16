import React, { useEffect, useState } from 'react'
import PlayerForm from '../components/PlayerForm';
import axios from 'axios';
import PlayersList from '../components/PlayersList';
const Create = (props) => {

    
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player',)
            .then(res =>{ 
                setPlayers(res.data)
                setLoaded(true);
            });
    }, [])
    // const removeFromDom = playerId => {
    //     setPlayers(players.filter(player => player._id != playerId));
    // }


const createPlayer = player => {
        console.log(player)
        axios.post('http://localhost:8000/api/player/new', player)
            .then(res=>{
                setPlayers([...players, res.data]);
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    
    
    }
    return (
        <div>
                        {/* <Link to = {'/player'}>Home</Link> */}


<PlayerForm onSubmitProp={createPlayer} initialName="" initialPosition="" errors = {errors} />

        {loaded && <PlayersList players={players}/>}
        
    
            
        </div>
        
    )
}

export default Create
