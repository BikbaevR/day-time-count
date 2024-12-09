import { useState } from "react";
import { Task } from "../task/task"
import { logger } from '../tools/logger'

export const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName, taskDescription, value) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            new Task(taskName, taskDescription, value, 'Новый'),
        ]);
    };

    const getTasks = () => {
        return tasks;
    };
}
