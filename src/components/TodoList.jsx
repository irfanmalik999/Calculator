import React from 'react'

function TodoList({ todoList }) {
  return (
    <div>
        <ul>
            {
                todoList.map((item) => (
                    <li className='list-group-item' style={{width:"100px", height:"100px"}} key={item} > {item} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList