import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function Lists({ todoList, setTodoList }) {

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
            <DragDropContext>
                <Droppable droppableId='todoApp'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoList.map((data, index) =>
                                <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                                    {(provided, snapshot) => (
                                        <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                            <div className="list">
                                                <input type="checkbox" defaultChecked={false} onChange={() => checkboxCompleted(data.id)} />
                                                <span className={data.completed ? "completed" : undefined}>{data.title}</span>
                                                <button className="btn" onClick={() => btnClick(data.id)}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
