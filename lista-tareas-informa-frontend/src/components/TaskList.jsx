import React, { useEffect } from 'react';
import TaskItem from './TaskItem';
import { getTasks } from '../services/Api';


const TaskList = ({ tasks, setTasks, onEdit }) => {
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getTasks();
            setTasks(response.data);
        };
        fetchTasks();
    }, [setTasks]);

    const handleToggleCompleted = (updatedTask) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    return (
        <div className="container">
            <div className="row">
                {tasks.map((task) => (
                    <div className="col-md-4 mb-4" key={task.id}>
                        <TaskItem 
                            task={task} 
                            onEdit={onEdit} 
                            onDelete={() => setTasks(tasks.filter(t => t.id !== task.id))} 
                            onToggleCompleted={handleToggleCompleted} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;