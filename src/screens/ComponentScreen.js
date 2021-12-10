import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentScreen = () => {
    return (
        <Text style={styles.primaryText}>Hello!</Text>
    )
}

const styles = StyleSheet.create({
    primaryText : {
        fontSize : 30,
        color : "red"
    }
})

export default ComponentScreen;