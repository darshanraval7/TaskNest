import React from 'react';

const TaskRow = ({ task, index, onCheckboxChange, onDelete }) => {
  const priorityColors = {
    High: 'bg-danger text-white',
    Medium: 'bg-warning text-dark',
    Low: 'bg-success text-white'
  };

  console.log('Task: ',task);

  return (
    <tr className="task-row">
      <th scope="row">{index + 1}</th>
      <td>{task.text}</td>
      <td>{new Date(task.date).toLocaleString()}</td>
      <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}</td>
      <td>
        <span className={`badge ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </td>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onCheckboxChange(task.id)}
        />
        {task.completed ? "Completed" : "In Progress"}
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
