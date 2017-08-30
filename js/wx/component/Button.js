
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

const Button = (props) =>{

    return (
        <TouchableHighlight
            activeOpacity={0.5}
            style = {{borderRadius : 3}}
            onPress = { ()=>{
                props.onClick()
            }}
        >
            <Text style={[styles.textStyle,props.style]}>
                {props.text}
            </Text>
        </TouchableHighlight>
    )


}

module.exports = Button

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle:{
        backgroundColor:'green',
        padding:8,
        borderRadius:3,
        fontSize:18,
        height:48,
        textAlign:'center',
        textAlignVertical:'center'
    }
});
