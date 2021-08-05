import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';


export default () => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{ 
                setAllAuthors(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = authorId => {
        setAllAuthors(allAuthors.filter(author => author._id != authorId));
    }
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      
    const classes = useStyles();
    
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to = {"/authors/new"}>Add an author</Link>
            <p style={{color:'purple'}}>We have quotes by: </p>
        <TableContainer component={Paper} style={{marginLeft:'25em'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Actions available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allAuthors.map((author,i) => (
            <TableRow key={i}>
              <TableCell align= "left" style={{color:'purple'}}>
                {author.name}
              </TableCell>
              <TableCell>
              <button><Link to={"/authors/" + author._id + "/edit"}>
            Edit
            </Link>
            </button>-
            <DeleteButton authorId = {author._id} successCallback = {() => removeFromDom(author._id)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
        </div>
    )
}
{/* <table>
<tr>
    <th>Authors</th>
    <th>Actions available</th>
</tr>
{
allAuthors.map((author, i)=>{
    return <div> <Link to ={"/authors/" + author._id }><p key = {i}> {author.name} </p>
    </Link></div>
})
 }
</table> */}