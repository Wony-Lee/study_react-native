import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sample: {
        backgroundColor: 'black',
    },
    text: {
        color: '#FFFFFF',
    },
});

const Greeting = ({ desc }) => {
    return (
        <View style={styles.sample}>
            <Text style={styles.text}>Greeting {desc}</Text>
        </View>
    );
};

Greeting.defaultProps = {
    desc: '리액트 네이티브',
};

export default Greeting;
