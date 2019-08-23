/* eslint-disable react-hooks/exhaustive-deps */
import React, {
} from 'react';
  const Task = (props)=>
  {
     
  
        const removeTodo = (id)=>{
            console.log(id);
            props.removeAction(id);

        };
return (<div>

    { props.data.map((i,k)=>{
      
            return (<div key={i.id} className={"listItem active"} 
            >
                <div className='ListDate'>
                    < div className = "Date" > {
                        i.date_item
                    } < /div>
                </div>
                <div className='Task'>{i.name}</div>
                <div className="done" onClick={(e)=>{
                    e.preventDefault();
                    removeTodo(i.id)
                    }}>x</div>
            </div>);
  })
  
  }
</div>);
  
    }


        export default Task;