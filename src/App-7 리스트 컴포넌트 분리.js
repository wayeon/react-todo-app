import { findAllByTestId } from '@testing-library/react';
import React, { useState } from 'react'
import Lists from './components/Lists';

export default function App() {

    const [todoList, setTodoList] = useState([]);

    const textChange = (e) => {
        // console.log('e', e.target.value)
        setValue(e.target.value);
    }

    const [value, setValue] = useState("");

    const btnSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        }

        setTodoList(prev => [...prev, newTodo])
        setValue("");
    }


    return (
        <div className='container'>
            <div className="todoBlock">
                <div className="title">
                    <h1>To Do List</h1>
                </div>

                <Lists todoList={todoList} setTodoList={setTodoList} />

                {/* 할일목록 추가 입력창 만들기 */}
                <form style={{ display: 'flex' }} onSubmit={btnSubmit}>
                    <input type="text" name="value" style={{ flex: '10', padding: '5px' }} placeholder="해야할 일을 입력하세요" onChange={textChange} value={value} />
                    <input type="submit" value="입력" style={{ flex: '1' }} />
                </form>
            </div>
        </div>
    )
}
