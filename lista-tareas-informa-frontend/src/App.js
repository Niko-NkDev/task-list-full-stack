import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import logo from "./images/informa-colombia.jpg";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
  
    <div className="container mt-4">
      <div>
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
      </div>
      <h1 className="text-center">Lista de Tareas</h1>
      <TaskForm
        task={editingTask}
        setTasks={setTasks}
        isEditing={!!editingTask}
        setIsEditing={() => setEditingTask(null)}
      />
      <TaskList tasks={tasks} setTasks={setTasks} onEdit={handleEdit} />
    </div>
  );
};

export default App;
