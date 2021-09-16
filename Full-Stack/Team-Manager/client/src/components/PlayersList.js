import React from 'react'

const PlayersList = (props) => {
    return (
        <div>
            {props.players.map((player, idx)=>{
                return <p key={idx}>{player.name}</p>
            })}
        </div>
    )
}

export default PlayersList
