import { View, Text, StyleSheet, Button } from 'react-native';
import { getRandomColor } from "../../static_scripts/tools/Tools";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    LightSpeedInRight,
    LightSpeedOutLeft,
    runOnJS
} from 'react-native-reanimated';
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../taskContext/TaskContext";

export const TaskCard = ({ id, title, description, type, taskStatus, created_at, updated_at }) => {
    const { removeTask } = useContext(TaskContext);
    const backgroundColor = useSharedValue('teal');
    const [isExiting, setIsExiting] = useState(false); // Флаг для анимации

    useEffect(() => {
        const interval = setInterval(() => {
            backgroundColor.value = withTiming(getRandomColor(), { duration: 1000 });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Стиль с анимацией изменения цвета
    const animatedStyles = useAnimatedStyle(() => {
        return {
            backgroundColor: backgroundColor.value,
            height: 'auto',
            paddingHorizontal: 20,
            borderRadius: 10,
            paddingVertical: 20,
            gap: 10
        };
    });

    // Функция для запуска анимации исчезновения и удаления задачи
    const handleDelete = () => {
        setIsExiting(true); // Устанавливаем флаг для анимации

        // Запуск анимации исчезновения
        backgroundColor.value = withTiming('transparent', { duration: 500 }, () => {
            // Когда анимация завершена, удаляем задачу
            runOnJS(removeTask)(id);
        });
    };

    return (
        <Animated.View
            style={animatedStyles}
            entering={LightSpeedInRight.duration(200)} // Входная анимация
            // exiting={isExiting ? LightSpeedOutLeft.duration(500) : undefined} // Анимация выхода, если isExiting true
        >
            <Text style={styles.text}>{id}</Text>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{type}</Text>
            <Text style={styles.text}>{taskStatus}</Text>
            <Text style={styles.text}>{created_at}</Text>
            <Text style={styles.text}>{updated_at}</Text>
            <Button
                title='Удалить'
                onPress={handleDelete} // Нажатие запускает анимацию и удаление
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    }
});
