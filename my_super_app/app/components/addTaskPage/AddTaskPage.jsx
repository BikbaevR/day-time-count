import React, {useContext, useState} from 'react';
import {View, SafeAreaView, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Alert} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import {taskTypes} from "../../static_scripts/taskTypes/taskTypes";
// import {addTask, CreatedTask} from "../../static_scripts/createdTask/createdTask";
import {Task} from "../../static_scripts/task/task";
import {CreatedTask, TaskManager} from "../../static_scripts/createdTask/createdTask";

import { TaskContext } from '../taskContext/TaskContext'

export const AddTaskPage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const { addTask } = useContext(TaskContext);


    const handleSubmit = () => {
        if (!taskName.trim() || !taskDescription.trim() || !value) {
            Alert.alert('Ошибка', 'Все поля должны быть заполнены!');
            return;
        }

        console.log(`Заголовок созданной задачи - ${taskName}`);
        console.log(`Описание созданной задачи - ${taskDescription}`);
        console.log(`Тип созданной задачи - ${value}`);
        console.log(`Статус созданной задачи - 'Новый'`);
        console.log(`Дата создания задачи - ${Date.now()}`);
        console.log(`Дата изменения задачи - ${Date.now()}`);
        console.log('===================================================')

        // Alert.alert('Задача создана!', JSON.stringify(newTask, null, 2));


        // CreatedTask.push(new Task(taskName, taskDescription, value, 'Новый'));
        // CreatedTask.map((task, index) => {
        //     console.log(`ID созданной задачи - ${task.id}`);
        //     console.log(`Заголовок созданной задачи - ${task.title}`);
        //     console.log(`Описание созданной задачи - ${task.description}`);
        //     console.log(`Тип созданной задачи - ${task.type}`);
        //     console.log(`Статус созданной задачи - ${task.taskStatus}`);
        //     console.log(`Дата создания задачи - ${task.created_at}`);
        //     console.log(`Дата изменения задачи - ${task.updated_at}`);
        //     console.log('*************************************************')
        // })

        addTask(taskName, taskDescription, value);

        console.log(`Кол-во элементов - ${CreatedTask.length}`);
    };

    const items = taskTypes.map((taskType) => ({
        label: taskType.typeName,
        value: taskType.id,
    }));

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.mainText}>Создать задачу</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Название задачи'
                    value={taskName}
                    onChangeText={setTaskName}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Описание'
                    value={taskDescription}
                    onChangeText={setTaskDescription}
                />

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    placeholder="Выберите тип"
                    style={styles.input}
                    dropDownContainerStyle={styles.dropdownContainer}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Создать</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingHorizontal: 20,
    },
    input: {
        height: 50,
        backgroundColor: '#dfdfdf',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 0,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#dfdfdf',
        width: '60%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dropdownContainer: {
        backgroundColor: '#dfdfdf',
        borderWidth: 0,
    }
});
