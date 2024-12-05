import React, { useState } from 'react';
import {View, SafeAreaView, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Alert} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import {taskTypes} from "../../static_scripts/taskTypes/taskTypes";
import {CreatedTask} from "../../static_scripts/createdTask/createdTask";
import {Task} from "../../static_scripts/task/task";

export const AddTaskPage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');


    const handleSubmit = () => {

        // console.log(taskName);
        // console.log(taskDescription);
        // console.log(value);

        if (!taskName.trim() || !taskDescription.trim() || !value) {
            Alert.alert('Ошибка', 'Все поля должны быть заполнены!');
            return;
        }

        const newTask = {
            title: taskName,
            description: taskDescription,
            type: value,
            taskStatus: 'Новый'
        };

        // Alert.alert('Задача создана!', JSON.stringify(newTask, null, 2));

        CreatedTask.push(new Task(taskName, taskDescription, value, 'Новый'));
        CreatedTask.map((task, index) => {
            console.log(task.id);
            console.log(task.title);
        })

        console.log(CreatedTask.length);

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
