import {View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert} from "react-native";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../auth/AuthContext";
import {logger} from "../../static_scripts/tools/logger";

export const Login = () => {

    const [loginValue, setLogin] = useState('');
    const [passwordValue, setPassword] = useState('');
    const { login } = useContext(AuthContext);



    const handleSubmit = () => {
        logger.writeLog("Login.handleSubmit | " + loginValue + " | " + passwordValue);


        if (!loginValue.trim() || !passwordValue.trim()) {
            Alert.alert('Ошибка', 'Все поля должны быть заполнены!');
            return;
        }

        login({ loginValue, passwordValue });
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.mainText}>Создать задачу</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Логин'
                    value={loginValue}
                    onChangeText={setLogin}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Пароль'
                    value={passwordValue}
                    onChangeText={setPassword}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Войти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginLeft: 20,
        marginRight: 20,
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