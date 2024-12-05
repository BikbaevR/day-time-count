import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View>
            <Text>Details Screen</Text>
        </View>
    );
}

function TabViewExample() {
    return (
        <Tab.Navigator id='id'>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
    );
}

export default function TESTApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator id='id'>
                <Stack.Screen name="TabView" component={TabViewExample} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
