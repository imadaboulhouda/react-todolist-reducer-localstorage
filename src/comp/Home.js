import React from 'react';
import  TaskList from './TaskList';
import Forma from './form';
const Home = (props) =>{
    return (<React.Fragment>
        <TaskList />
        <Forma />
    </React.Fragment>);
}

export default Home;