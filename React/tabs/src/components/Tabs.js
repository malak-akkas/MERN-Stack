import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const Tabs() => {
const tab = ["Tab 1,Tab 2,Tab 3"];
const [msg, setMsg] = useState ("");


const clickhandler = (e,x,i) => {
    e.preventDefault ();
    setMsg(value + "was tapped"); 
}

return (
    <div>
        {
            taps.map((value,i)=>{
            return <Button variant="contained" color="primary" key={i} onClick={(e)=>clickhandler(e,value,i)}>
            {value}
            </Button>
            })
        }
        <p>{msg}</p>
    </div>
)
}
export default Tabs
