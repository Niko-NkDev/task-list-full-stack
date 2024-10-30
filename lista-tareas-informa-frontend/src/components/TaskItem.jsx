import React from 'react';
import { deleteTask, updateTask } from '../services/Api';

const TaskItem = ({ task, onEdit, onDelete, onToggleCompleted }) => {
    const handleDelete = async () => {
        await deleteTask(task.id);
        onDelete(task.id);
    };

    const handleToggleCompleted = async () => {
        const updatedTask = { ...task, realizado: !task.realizado };
        await updateTask(task.id, updatedTask);
        onToggleCompleted(updatedTask);
    };

    return (
        <div className={`card mb-2 p-2 ${task.realizado ? 'completed-task' : ''}`}>
            <h5 className="card-title">{task.titulo}</h5>
            <p className="card-text">{task.descripcion}</p>
            <div className="form-check">
                <input 
                    type="checkbox" 
                    className="form-check-input" 
                    checked={task.realizado}    
                    onChange={handleToggleCompleted} 
                />
                <label className="form-check-label">Completada</label>
            </div>
            <button className="btn btn-secondary btn-sm" onClick={() => onEdit(task)}>Editar</button>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>Eliminar</button>
        </div>
    );
};

export default TaskItem;

