
import { View, SafeAreaView, Text } from 'react-native'
// import {CreatedTask} from "../../static_scripts/createdTask/createdTask";
import {useContext, useState} from "react";
import {TaskContext} from "../taskContext/TaskContext";

export const HomePage = () => {

    const { tasks } = useContext(TaskContext);


    return (
        <SafeAreaView>
            <Text>HomePage</Text>

            {/*{tasks.map((task) => {*/}
            {/*    console.log(task.id)*/}
            {/*})}*/}

            {tasks.map((task, index) => {
                return (
                    <View key={index}>
                        <Text>{task.id}</Text>
                        <Text>{task.title}</Text>
                        <Text>{task.description}</Text>
                        <Text>{task.type}</Text>
                        <Text>{task.taskStatus}</Text>
                        <Text>{task.created_at}</Text>
                        <Text>{task.updated_at}</Text>

                        <Text>==================</Text>

                    </View>
                )
            })}


        </SafeAreaView>
    )
}

