import React from 'react';
import PropTypes from 'prop-types';

const TaskRow = ({ task, index, onCheckboxChange, onDelete }) => {
  const priorityColors = {
    High: 'bg-danger text-white',
    Medium: 'bg-warning text-dark',
    Low: 'bg-success text-white'
  };

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
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onCheckboxChange(task.id)}
            aria-label={`Mark task ${task.text} as ${task.completed ? 'incomplete' : 'complete'}`} // Accessibility
          />
          {task.completed ? "Completed" : "In Progress"}
        </label>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete task ${task.text}`} // Accessibility
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

// Adding PropTypes for validation
TaskRow.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
    priority: PropTypes.oneOf(['High', 'Medium', 'Low']).isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskRow;
