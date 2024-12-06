import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Prevent adding empty todos
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input
          type="text"
          className='todo-input'
          value={value}
          placeholder='Schedule This'
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Add to Schedule</button>
      </form>
    </div>
  );
};

export default TodoForm;