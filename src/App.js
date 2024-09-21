import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import ContactCard from './components/ContactCard/ContactCard';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks || [];
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "My To-Do List";
  });

  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("userName", userName);
  }, [tasks, userName]);

  const addTask = (taskText, taskCategory, priority, dueDate) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      date: new Date().toISOString(),
      category: taskCategory,
      priority,
      dueDate,
      completed: false,
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const handleCheckboxChange = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      tasks.forEach(task => {
        if (task.dueDate && !task.completed) {
          const dueDate = new Date(task.dueDate);
          const hoursLeft = Math.floor((dueDate - now) / (1000 * 60 * 60));
          if (hoursLeft < 24 && hoursLeft > 0) {
            alert(`Reminder: Task "${task.text}" is due in ${hoursLeft} hours.`);
          }
        }
      });
    };
    const intervalId = setInterval(checkReminders, 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [tasks]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        {isEditingName ? (
          <form onSubmit={(e) => { e.preventDefault(); setIsEditingName(false); }} className="d-flex">
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button className="btn btn-primary ms-2" type="submit">Save</button>
          </form>
        ) : (
          <>
            <h4>{userName}</h4>
            <button className="btn btn-secondary" onClick={() => setIsEditingName(true)}>Edit Name</button>
          </>
        )}
      </div>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} onCheckboxChange={handleCheckboxChange} onDelete={handleDelete} />
      <ContactCard />
    </div>
  );
}

export default App;
