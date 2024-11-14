import axios from 'axios'; /*encargado de hacer consumo de api rest*/


const API_URL = 'https://lista-tareas-informa-backend-latest.onrender.com/api/tasks';

export const getTasks = () => axios.get(API_URL);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
export const getTaskById = (id) => axios.get(`${API_URL}/${id}`);
