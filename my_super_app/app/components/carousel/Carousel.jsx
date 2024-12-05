import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

const data = [
    { id: '1', title: 'First Slide', image: 'https://via.placeholder.com/300' },
    { id: '2', title: 'Second Slide', image: 'https://via.placeholder.com/300' },
    { id: '3', title: 'Third Slide', image: 'https://via.placeholder.com/300' },
];

const Carousel = () => {
    const { width } = Dimensions.get('window');
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            >
                {data.map((item) => (
                    <View key={item.id} style={[styles.slide, { width }]}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 8,
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        color: '#333',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#333',
    },
});

export default Carousel;