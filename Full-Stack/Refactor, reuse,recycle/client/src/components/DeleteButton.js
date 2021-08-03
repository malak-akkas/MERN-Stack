import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { pId, successCallback } = props;

    const deleteProduct = (e) => {
        console.log(pId)
        axios.delete('http://localhost:8000/api/products/' + pId)
      
            .then(res=>{
                successCallback();
                console.log("I am in the deleteproduct in the button")
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton
