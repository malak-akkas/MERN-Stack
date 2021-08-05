import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorsForm from '../components/AuthorsForm';
import AuthorsList from '../components/AuthorsList';
import { Link } from '@reach/router';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors',)
            .then(res =>{ 
                setAuthors(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
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
            <h1>Favorite Authors</h1>
            <Link to = {'/authors'}>Home</Link>
            <p style={{color:'purple'}}>Add a new Author: </p>
             
           
           <AuthorsForm onSubmitProp={createAuthor} initialName="" errors = {errors} />
           
           
           <hr/>
           {loaded && <AuthorsList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
        
    )
}