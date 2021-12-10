import React, {useState, useReducer} from "react";
import {View, Button, StyleSheet, Text} from "react-native";
import ColorCounter from "./ColorCounter";

const reducer = (state, action) => {
    // state === {red : number, green : number, blue : number}
    // action === {type : 'red || 'green' || 'blue', payload : +15 || -15} 
    switch(action.type){
        case 'change_red': {
            // never change state directly. 
            return {...state, red : state.red + action.payload};
        }
        case 'change_green': {
            return {...state, green : state.green + action.payload};
        }
        case 'change_blue': {
            return {...state, blue : state.blue + action.payload};
        }
        default : {
            return state;
        }

    }
}


const SquareScreen = () => {
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});  /* initial value of state will be red:0, green:0, blue:0 */
    const {red, green, blue} = state;

    const color_increment = 15;


    return (
        <View>
            <ColorCounter onIncrease={() => red > 255 ? dispatch({type:'change_red', payload: 255}) : dispatch({type:'change_red', payload: color_increment})} onDecrease={() => red < 0 ? dispatch({type:'change_red', payload: 0}) : dispatch({type:'change_red', payload: -1 * color_increment})}  color="Red"/>
            <ColorCounter onIncrease={() => green > 255 ? dispatch({type:'change_green', payload: 255}) : dispatch({type:'change_green', payload: color_increment})} onDecrease={() => green < 0 ? dispatch({type:'change_green', payload: 0}) : dispatch({type:'change_green', payload: -1 * color_increment})}  color="Green"/>
            <ColorCounter onIncrease={() => blue > 255 ? dispatch({type:'change_blue', payload: 255}) : dispatch({type:'change_blue', payload: color_increment})} onDecrease={() => blue < 0 ? dispatch({type:'change_blue', payload: 0}) : dispatch({type:'change_blue', payload: -1 * color_increment})}  color="Blue"/>
            <View style={{height : 100, width : 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SquareScreen;


/*
A reducer is a function that manages changes to an object. It is a function that gets called with two objects. Argument #1 - object that has all of our state in it 
and Argument #2 - an object that describes the update we want to make. We look at argument #2 and use it to decide how to change Argument #1. There are two technicalities
to note : (1) we never change Argument #1 directly. (2) We must always return a value to be used as Argument #1 

*/