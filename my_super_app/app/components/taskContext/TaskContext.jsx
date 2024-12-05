import React, { createContext, useState } from 'react';
import {Task} from "../../static_scripts/task/task";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName, taskDescription, value) => {
        console.log('added')

        setTasks((prevTasks) => [...prevTasks, new Task(taskName, taskDescription, value, 'Новый')]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};
