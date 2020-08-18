import React from 'react';

export default function ToDoList (props) {
    return (
        <div>
            To Do List
            <ul>
                {props.items.map(item => (
                    <li key={item.name}>{item.name} - {item.description}</li>
                ))}
            </ul>
        </div>
    );
}
