import React,{useState} from 'react'

const Form = (props) => {
    const [typeVal, setTypeVal] = useState("people");
    const [id, setId] = useState(1);

    // const onChangeHandler= ()=>{
    //     setTypeVal()
    // }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        props.putData(typeVal,id)
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <select onChange={(e)=> setTypeVal(e.target.value)}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <input type="number" onChange={(e)=> setId(e.target.value)}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Form