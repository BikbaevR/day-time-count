import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {getRandomColor} from "../../static_scripts/tools/Tools";


export const TaskCard = ({id, title, description, type, taskStatus, created_at, updated_at}) => {

    return(
        <View style={[styles.container, { backgroundColor: getRandomColor(),}]} key={id}>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{type}</Text>
            <Text>{taskStatus}</Text>
            <Text>{created_at}</Text>
            <Text>{updated_at}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: Dimensions.get('window').width,
        height: 'auto',
        paddingHorizontal: 20,
        // backgroundColor: '#dc7e7e',
        borderRadius: 10,
        paddingVertical: 20
    }
})