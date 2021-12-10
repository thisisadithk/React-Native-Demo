import React, {useReducer} from "react";
import { TouchableOpacity, View, Text } from "react-native";

const reducer = (state, action) => {
    switch(action.type){
        case 'increment' : {
            return {...state, count : state.count + action.payload};
        }
        case 'decrement' : {
            return {...state, count : state.count - action.payload};
        }
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0})

    return (
        <View>
            <TouchableOpacity onPress={() => dispatch({type : "increment", payload : 1})}>
                <Text>Increment</Text>
            </TouchableOpacity>
            <Text>{state.count}</Text>
            <TouchableOpacity onPress={() => dispatch({type : "decrement", payload : 1})}>
                <Text>Decrement</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter;