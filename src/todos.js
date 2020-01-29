import React from 'react';
import './todos.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function MyToDos(props) {
    const todos = props.items;
    const todoItems = todos.map(item =>{
        return(
            <div className="list" key={item.key}>
                <p>
                    {item.text}
                    <span>
                        <FontAwesomeIcon 
                            className="faicons" 
                            icon="trash"
                            onClick = {()=>props.deleteToDo(item.key)}
                        />
                    </span>
                </p>
            </div>
        )
    });
    return(
        <div>{todoItems}</div>
    )
}
export default MyToDos;
