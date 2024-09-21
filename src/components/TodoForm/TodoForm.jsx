import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Personal");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return; // Prevent adding empty tasks

    addTask(taskText.trim(), taskCategory, priority, dueDate);
    resetForm();
  };

  const resetForm = () => {
    setTaskText("");
    setTaskCategory("Personal");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form table-body-wrapper">
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-2 mb-sm-0">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            required // Ensure task text is filled
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-2 mb-sm-0">
          <select
            className="form-select"
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Home">Home</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="col-md-2 col-sm-6 mb-2 mb-sm-0">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]} // Prevent past dates
          />
        </div>
        <div className="col-md-2 col-sm-6 mb-2 mb-sm-0">
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="col-md-2 col-sm-12">
          <button className="btn btn-primary w-100" type="submit">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

// Adding PropTypes for validation
TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TodoForm;
