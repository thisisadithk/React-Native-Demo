import React, {useState} from "react";
import {View, Button, StyleSheet, Text} from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={onIncrease}/>
            <Button title={`Decrease ${color}`} onPress={onDecrease}></Button>
        </View>
    )
}

export default ColorCounter;