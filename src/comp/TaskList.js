import React, {
    useContext,
    useLayoutEffect,
    useState
} from 'react';
import {TodoApp} from '../context/cp';
import Task from './Task';
const TaskList = (props)=>{
        const [p, setP] = useState('');
    const {
        statex,
        removeTodox
    } = useContext(TodoApp)
    useLayoutEffect(() => {
        setP('active');
        console.log('po')
    },[statex]);
    return (<div className="taskList">
        < Task data = {
                statex }
                p={p}
                removeAction={removeTodox} / >
    </div>);
}
export default TaskList;