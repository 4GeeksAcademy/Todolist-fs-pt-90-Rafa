import React, { useState } from "react";

const List = () => {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setTodos(todos.concat(task));
            setTask("");
        }
    };

    const filterTodos = (index) => {
        setTodos(todos.filter((t, i) => i !== index))
    };

    return (<div className="container">
        <h1 className="container">My Todos</h1>
        <ul>
            <li className="input"><input type="text"
                placeholder="What do you need to do?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyDown}
            /></li>
            {todos.map((todo, index) => {
                return (
                    <li key={index} id="tasks">
                        {todo}
                        <i className="fa-solid fa-circle-minus"
                            onClick={() => filterTodos(index)}></i></li>)
            })}
            <li id="counter">{todos.length} tasks</li>
        </ul>
    </div>
    );
}

export default List;