import React from 'react'

export default function Lists({ todoList, setTodoList }) {
    //버튼 스타일
    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    //리스트 스타일
    const listStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none"
        }
    }
    const btnClick = (id) => {
        let newTodoList = todoList.filter(data => data.id !== id)
        console.log('newTodoList', newTodoList);
        setTodoList(newTodoList);
    }

    const checkboxCompleted = (id) => {
        let newTodoList = todoList.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        })
        setTodoList(newTodoList);
    }


    return (
        <div>
            {todoList.map((data) =>
                <div style={listStyle(data.completed)} key={data.id}>
                    <input type="checkbox" defaultChecked={false} onChange={() => checkboxCompleted(data.id)} />
                    {data.title}
                    <button style={btnStyle} onClick={() => btnClick(data.id)}>X</button>
                </div>
            )}
        </div>
    )
}
