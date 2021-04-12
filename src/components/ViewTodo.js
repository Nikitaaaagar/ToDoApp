import React from 'react';
import { data } from './data';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';

const Todo = () => {
  const [todos, setTodos] = React.useState(data);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completedTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <UpdateTodo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completedTodo}
            removeTodo={removeTodo}
          />
        ))}
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Todo;