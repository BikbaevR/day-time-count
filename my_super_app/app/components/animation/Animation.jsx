import { Button, View } from 'react-native';
import Animated, { useSharedValue, withSpring, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export const Animation = () => {
    const width = useSharedValue(150);
    const height = useSharedValue(150);
    const backgroundColor = useSharedValue('teal');


    const startAnimate = () => {
        const randomWidth = Math.floor(Math.random() * 300 + 100);
        const randomHeight = Math.floor(Math.random() * 300 + 100);

        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

        width.value = withTiming(randomWidth);
        height.value = withTiming(randomHeight);
        backgroundColor.value = withTiming(randomColor, {duration: 1000})
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: width.value,
            height: height.value,
            backgroundColor: backgroundColor.value,
        }
    })
}