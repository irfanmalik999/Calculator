import React, { useState } from 'react'
import style from "./Todo.module.css"
import TodoList from './TodoList';

function Todo() {
    const [todoList, setTodoList] = useState(["Hello"])
    const [todo, setTodo] = useState("")
    const [date, setDate] = useState()

    const handleChange = (event) => {
        event.preventDefault();
        let val = event.target.value;
        console.log(event)
    }

    const handleSubmit = (event) => {
        // console.log(event)
        let newList = [...todoList, todo, date]
        setTodoList(newList)
        // console.log(todoList)
        setTodo("");
    }

  return (
    <div>
        <div className={style.todos} >
            <input  onChange={(event) => setTodo(event.target.value)}   placeholder=' Enter your Todos here'  className={style.todo} type="text" />
            <input  onChange={(event) => handleChange(event)} className={style.date} type="datetime-local" />
            <button className={style.add} onClick={(event) => handleSubmit(event)} >Add</button>
        </div>
        <TodoList todoList={todoList} />
    </div>
    
  )
}

export default Todo