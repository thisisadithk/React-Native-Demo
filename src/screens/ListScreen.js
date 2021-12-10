import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name : 'Friend #1', age : 10},
        {name : 'Friend #2', age : 20},
        {name : 'Friend #3', age : 30},
        {name : 'Friend #4', age : 40},
        {name : 'Friend #5', age : 50},
        {name : 'Friend #6', age : 60}
    ]
    return <FlatList keyExtractor={(friend) => friend.name} data={friends} renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} is {item.age} years old!</Text>
    }}/>
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50,
        marginHorizontal : 50
    }
}); 

export default ListScreen;




/*
FlatList Element is used to display list items in react native. It turns an array into a list of elements
We are required to pass in a 'prop' of 'data' - the array of data that we are going to create a bunch
of elements out of. Also required to pass in a 'renderItem' prop - function that will turn each individual item into an element.
In react we use map to build a list from an array whereas in React Native we use React Native. 

FlatList has some important props to note. First is the data prop which takes in the array to be converted
into a list. Next is the renderItem prop which takes each item within the data and returns it as a list item. 
Next is the keyExtractor prop which sets each item with a unique key so that it can be tracked by react-native.
Another prop is horizontal which makes the list items appear horizontally. In order to hide the scroll bar
that appears we can use the showsHorizontalScrollIndicator prop and set it to false. 

Buttons can be designed in two ways in react native. a) Through a simple Button component for showing a button 
and detecting a press. b) Through a touchable opacity which is a highly customisable component that can detect 
a press on just about any kind of element. 
*/