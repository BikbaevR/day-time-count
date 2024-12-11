import React, { createContext, useState } from 'react';
import {Task} from "../../static_scripts/task/task";
import { logger } from '../../static_scripts/tools/logger'

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName, taskDescription, value) => {
        logger.writeLog(`Задача [${taskName}] создана`);
        setTasks((prevTasks) => [...prevTasks, new Task(taskName, taskDescription, value, 'Новый')]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};
