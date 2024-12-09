
import {View, SafeAreaView, Text, StyleSheet, Dimensions, ScrollView, Button} from 'react-native'
import {useContext, useState} from "react";
import {TaskContext} from "../taskContext/TaskContext";
import {TaskCard} from "../taskCard/TaskCard";
import Carousel from "../carousel/Carousel";
import {AuthContext} from "../../auth/AuthContext";


export const HomePage = () => {

    const { tasks } = useContext(TaskContext);
    const { authorized, user, logout } = useContext(AuthContext);

    return (
        <ScrollView contentContainerStyle={{gap:10}}>
            <SafeAreaView style={styles.container}>


                {authorized ? (
                    <>
                        <Text style={styles.mainText}>Вы авторизованы - {user}</Text>
                        <Button title="Выйти" onPress={() => logout()} />
                    </>
                ) : (
                    <Text></Text>
                )}






                <Text style={styles.mainText}>Ваши задачи</Text>

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
    }
})
