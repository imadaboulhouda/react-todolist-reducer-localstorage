import React,{useState,useContext} from 'react';
import {
    TodoApp
} from '../context/cp';
const Form = (props)=>{
    const [data,setData] = useState('');
    const {addTodox} = useContext(TodoApp);
    const addTask = ()=>
    {
        if(data.trim().length > 0)
        addTodox(data);
        setData('');
    }
    return (<div className='form'>
        <textarea onChange={(e)=>{
            setData(e.target.value);
        }
        }
        value = {
            data
        } > < /textarea>
        <button onClick={addTask}>Add</button>
        </div>);
}
export default Form;