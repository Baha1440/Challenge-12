import React from 'react';

const TodoList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;