
import {View, SafeAreaView, Text, StyleSheet, Dimensions, ScrollView, Button, TouchableOpacity} from 'react-native'
import React, {useContext, useState} from "react";
import {TaskContext} from "../taskContext/TaskContext";
import {TaskCard} from "../taskCard/TaskCard";
import Carousel from "../carousel/Carousel";
import {AuthContext} from "../../auth/AuthContext";

import Animated, { useSharedValue, withSpring, withTiming, useAnimatedStyle, LightSpeedInRight, LightSpeedOutLeft } from 'react-native-reanimated';


export const HomePage = () => {

    const { tasks, addTask } = useContext(TaskContext);
    const { authorized, user, logout } = useContext(AuthContext);


    return (
        <ScrollView contentContainerStyle={{gap:10}}>
            <SafeAreaView style={styles.container}>

                {authorized ? (
                    <>
                        <Text style={styles.mainText}>Вы авторизованы - {user}</Text>
                        <View style={styles.buttonPosition}>
                            <TouchableOpacity style={styles.button} onPress={logout}>
                                <Text style={styles.buttonText}>Выйти</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <Text></Text>
                )}

                <Text style={styles.mainText}>Ваши задачи</Text>
                <Button title="Кнопка" onPress={() => {
                    addTask("taskName", "taskDescription", "value");
                }} />

                    {tasks.length > 0 ? tasks.map((task) => (
                        <TaskCard
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            type={task.type}
                            taskStatus={task.taskStatus}
                            created_at={task.created_at}
                            updated_at={task.updated_at}
                            color={task.color}
                            key={task.id}
                        />
                    )):
                        <Text style={styles.mainText}>Задач нет</Text>
                    }
                {/*<Button title="start animate" onPress={startAnimate} />*/}
                {/*<Animated.View style={animatedStyles}/>*/}

                {/*<Carousel />*/}

            </SafeAreaView>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mainText: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
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
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonPosition: {
        // justifyContent: 'center',
        alignItems: 'center'
    }
})
