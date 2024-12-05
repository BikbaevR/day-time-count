
import { View, SafeAreaView, Text } from 'react-native'
import {CreatedTask} from "../../static_scripts/createdTask/createdTask";

export const HomePage = () => {
    return (
        <SafeAreaView>
            <Text>HomePage</Text>

            {CreatedTask.map((task, index) => {
                return (
                    <View>
                        <Text>{task.id}</Text>
                        <Text>{task.description}</Text>

                    </View>
                )
            })}


        </SafeAreaView>
    )
}

