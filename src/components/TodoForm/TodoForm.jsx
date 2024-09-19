import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Personal");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText, taskCategory, priority, dueDate);
    setTaskText("");
    setTaskCategory("Personal");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form table-body-wrapper">
      <div className="row">
        <div className="col-md-3 mb-2-mobile">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-2-mobile">
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
        <div className="col-md-2 mb-2-mobile">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-2-mobile">
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
        <div className="col-md-2">
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
