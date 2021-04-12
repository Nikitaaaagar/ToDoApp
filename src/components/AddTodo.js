import React from 'react';

const AddTodo = ({ addTodo }) => {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }
  export default AddTodo;