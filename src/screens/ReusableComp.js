import React from 'react';
import {View, StyleSheet, Image, Text, NativeModules} from 'react-native';


const ReusableComp = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.img_path}/>
            <Text>{props.title}</Text>
            <Text>{props.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1
    }
})

export default ReusableComp;