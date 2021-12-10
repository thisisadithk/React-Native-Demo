import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
        <Text style={styles.text}>Hi there!</Text>
        <Button title="Go to Components Page" onPress={() => props.navigation.navigate("Components")}/>
        <TouchableOpacity onPress={() => props.navigation.navigate("Lists")}>
            <Text>Go to Lists Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("MultipleComponents")}>
            <Text>Go to Multi Component Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Counter")}>
            <Text>Go to Multi Counter Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("ColourPicker")}>
            <Text>Go to Colour Picker Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Square")}>
            <Text>Go to Colour Box Page</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;