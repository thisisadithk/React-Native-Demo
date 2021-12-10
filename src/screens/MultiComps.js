import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import ReusableComp from './ReusableComp';

const MultiComps = () => {
    return (
        <View>
            <ReusableComp title={"Forest"} img_path={require("../../assets/forest.jpg")} score={9}/>
            <ReusableComp title={"Beach"} img_path={require("../../assets/beach.jpg")} score={7}/>
            <ReusableComp title={"Island"} img_path={require("../../assets/mountain.jpg")} score={4}/>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        justifyContent : "space-between"
    }
})



export default MultiComps;