import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, SafeAreaView } from 'react-native';
import {HomePage} from "./app/components/homePage/HomePage";
import {AddTaskPage} from "./app/components/addTaskPage/AddTaskPage";
import {TaskProvider} from "./app/components/taskContext/TaskContext";
import {Register} from "./app/components/register/Register";
import {AuthContext, AuthProvider} from "./app/auth/AuthContext";
import {Login} from "./app/components/login/Login";


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <AuthProvider>
            <TaskProvider>
                <NavigationContainer>
                    <Tabs />
                </NavigationContainer>
            </TaskProvider>
        </AuthProvider>
    );
}

const Tabs = () => {
    const { authorized } = useContext(AuthContext);

    return (
        <Tab.Navigator id="main">
            {authorized ?
                <>
                    <Tab.Screen
                        name="Register"
                        component={Register}
                        options={{ headerShown: false, tabBarIcon: () => null, unmountOnBlur: true }}
                    />
                    <Tab.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false, tabBarIcon: () => null, unmountOnBlur: true }}
                    />
                </> :
                <>
                    <Tab.Screen
                        name="Home"
                        component={HomePage}
                        options={{ headerShown: false, tabBarIcon: () => null, unmountOnBlur: true }}
                    />
                    <Tab.Screen
                        name="Create task"
                        component={AddTaskPage}
                        options={{ headerShown: false, tabBarIcon: () => null, unmountOnBlur: true }}
                    />
                </>
            }
        </Tab.Navigator>
    )
}