import React, {
    createContext,
    useReducer,
    useEffect
} from 'react';
import {
    ADD_TODO,
    REMOVE_TODO,
    TodoReducer} from './reducer';
import uuid from 'uuid/v1';
export const TodoApp = createContext();
export const TodoAppProvider =(props)=>{
    const [statex,dispatch] = useReducer(TodoReducer,[],()=>{
        let local = localStorage.getItem("todoList");
        return local ? JSON.parse(local) : [];
    });
    useEffect(()=>{
        localStorage.setItem("todoList",JSON.stringify(statex));
    },[statex]);
    const addTodox = (todo)=>{
        dispatch({
            type:ADD_TODO,
            todos: {
                id: uuid(),
                    name: todo,
                    date_item: new Date().getDate()+"/"+new Date().getMonth(),
                    done:false,

},
        });
    };
    const removeTodox = (id)=>{
        
        const todos = statex.filter(v=>v.id !== id);

        dispatch({
            type: REMOVE_TODO,
            todos,
        })
    };
    return (<TodoApp.Provider value={{
        statex,
        addTodox,
        removeTodox
    }}>
        { props.children}
    </TodoApp.Provider>);
};