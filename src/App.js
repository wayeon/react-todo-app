import { findAllByTestId } from '@testing-library/react';
import React, { useState } from 'react'
import Lists from './components/Lists';
import Form from './components/Form';

const localTodoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];

export default function App() {

    const [todoList, setTodoList] = useState(localTodoList);
    const [value, setValue] = useState("");

    const btnSubmit = (e) => {
        e.preventDefault();
        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        }
        if (value.trim().length !== 0) { 
            setTodoList(prev => [...prev, newTodo])
            localStorage.setItem("todoList", JSON.stringify([...todoList, newTodo]));
            setValue("");
        } else { 
            alert("해야 할 일을 입력하세요.");
        }
    }
    const deleteAll = () => {
        setTodoList([]);
        localStorage.setItem("todoList", JSON.stringify([]));
    }

    return (
        <div className='container'>
            <div className="todoBlock">
                <div className="title">
                    <h1>To Do List</h1>
                    <button className='deleteBtn' onClick={deleteAll}>Delete All</button>
                </div>

                <Lists todoList={todoList} setTodoList={setTodoList} />
                <Form value={value} setValue={setValue} btnSubmit={btnSubmit} />
            </div>
        </div>
    )
}
