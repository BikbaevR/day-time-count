import React, {useContext, useState} from 'react';
import {View, SafeAreaView, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Alert} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import {taskTypes} from "../../static_scripts/taskTypes/taskTypes";
import { TaskContext } from '../taskContext/TaskContext'
import { logger } from '../../static_scripts/tools/logger'
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {getRandomColor} from "../../static_scripts/tools/Tools";

export const AddTaskPage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const { addTask } = useContext(TaskContext);

    const backgroundColor = useSharedValue('teal');
    const AnimatedInput = Animated.createAnimatedComponent(TextInput);


    const setText = (input) => {
        setTaskDescription(input)
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            height: 50,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginBottom: 10,
            borderRadius: 10,
            borderWidth: 0,
            backgroundColor: backgroundColor.value
        };
    });

    const reColor = () => {
        backgroundColor.value = getRandomColor()
    }

    const handleSubmit = () => {
        if (!taskName.trim() || !taskDescription.trim() || !value) {
            Alert.alert('Ошибка', 'Все поля должны быть заполнены!');
            return;
        }
        addTask(taskName, taskDescription, value);
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
                <AnimatedInput
                    style={animatedStyles}
                    placeholder='Описание'
                    value={taskDescription}
                    onChangeText={(input) => {
                        reColor()
                        setText(input)
                    }}
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
