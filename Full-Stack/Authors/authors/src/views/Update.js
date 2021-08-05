import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorsForm from '../components/AuthorsForm';
import { Link } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then()
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
                // Set Errors
                
            }
        

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to = {'/authors'}>Home</Link>
            <p style={{color:'purple'}}>Edit this Author </p>
            
          {loaded && (
        <AuthorsForm onSubmitProp={updateAuthor} initialName={author.name} errors = {errors} />
        )}  
        </div>
    )
}
export default Update