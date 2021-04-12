import React from 'react';

const UpdateTodo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button className="btn btn-success mr-4" onClick={() => completeTodo(index)}>Mark Done</button>
          <button className="btn btn-danger" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }

  export default UpdateTodo;