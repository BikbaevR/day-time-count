import {useState} from "react";
import {Task} from "../task/task";

export const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName, taskDescription, value) => {
        console.log('task added');
        setTasks((prevTasks) => [
            ...prevTasks,
            new Task(taskName, taskDescription, value, 'Новый'),
        ]);
    };

    const getTasks = () => {
        return tasks;
    };
}




export let CreatedTask = []
//
// const [tasks, setTasks] = useState(CreatedTask)
//
//
// export const addTask = (taskName, taskDescription, value) => {
//     console.log('task added')
//     setTasks((prevTasks) => [...prevTasks, new Task(taskName, taskDescription, value, 'Новый')])
// }
//
// export const getTasks = () => {
//     return tasks
// }

