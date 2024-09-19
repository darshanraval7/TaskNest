import React from 'react';
import TaskRow from '../TaskRow/TaskRow';

const TodoList = ({ tasks, onCheckboxChange, onDelete }) => {
  const categories = ["Personal", "Home", "Shopping", "Others"];

  return (
    <div className="todo-list">
      {categories.map((category) => (
        <div key={category} className="mb-4 table-body-wrapper">
          <h5>{category}</h5>
          <hr />
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Task</th>
                  <th scope="col">Date</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks
                  .filter((task) => task.category === category)
                  .map((task, index) => (
                    <TaskRow
                      key={task.id}
                      task={task}
                      index={index}
                      onCheckboxChange={onCheckboxChange}
                      onDelete={onDelete}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
