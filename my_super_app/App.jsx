import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, SafeAreaView } from 'react-native';
import {HomePage} from "./app/components/homePage/HomePage";
import {AddTaskPage} from "./app/components/addTaskPage/AddTaskPage";
import {TaskProvider} from "./app/components/taskContext/TaskContext";
import {MyCarousel} from "./app/components/carousel/Carousel";


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <TaskProvider>
            <NavigationContainer>
                <Tab.Navigator id="main">
                    <Tab.Screen
                        name="Home"
                        component={HomePage}
                        options={{ headerShown: false, tabBarIcon: () => null }}
                    />
                    <Tab.Screen
                        name="Create task"
                        component={AddTaskPage}
                        options={{ headerShown: false, tabBarIcon: () => null }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </TaskProvider>
    );
}
