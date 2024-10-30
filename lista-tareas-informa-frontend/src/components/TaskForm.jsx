import React, { useState } from 'react';
import { createTask, updateTask } from '../services/Api';

const TaskForm = ({ task, setTasks, isEditing, setIsEditing }) => {
    const [titulo, setTitulo] = useState(task?.titulo || '');
    const [descripcion, setDescripcion] = useState(task?.descripcion || '');
    const [realizado, setRealizado] = useState(task?.realizado || false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                const response = await updateTask(task.id, { titulo, descripcion, realizado });
                setTasks((prevTasks) =>
                    prevTasks.map((t) => (t.id === task.id ? response.data : t))
                );
            } else {
                const response = await createTask({ titulo, descripcion, realizado });
                setTasks((prevTasks) => [...prevTasks, response.data]);
            }
            setIsEditing(false);
            setTitulo('');
            setDescripcion('');
            setRealizado(false);
        } catch (error) {
            console.error("Error al guardar la tarea:", error);
            alert("Hubo un error al procesar la tarea. Por favor, inténtelo de nuevo.");
        }
    };

    // Aquí está el único `return` del componente
    return (
        <form onSubmit={handleSubmit} className="shadow p-3 mb-5 bg-white rounded">
            <div className="mb-3">
                <label htmlFor="titulo" className="form-label">Título</label>
                <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Ingrese el título de la tarea"
                    required
                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea
                    className="form-control"
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Ingrese una descripción para la tarea"
                    required
                />
            </div>
            <div className="form-check mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="realizado"
                    checked={realizado}
                    onChange={(e) => setRealizado(e.target.checked)}
                />
                <label htmlFor="realizado" className="form-check-label">Realizada</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
                {isEditing ? "Actualizar Tarea" : "Agregar Tarea"}
            </button>
        </form>
    );
};

export default TaskForm;