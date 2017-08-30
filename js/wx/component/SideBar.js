

import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class SideBar extends Component{

    render(){

        let letters = ['☆', '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let letterView = []

        letters.map((letter,index) => {
                letterView.push(
                    <TouchableOpacity
                        key = {index}
                        onPress = { ()=>{
                        this.props.onLetterSelect(letter)
                    }}>

                    <View>
                        <Text style={{color: '#999999', fontSize: 13, paddingLeft: 2, paddingRight: 2}}
                            key = {"letter" + index}
                        >
                            {letter}
                        </Text>
                    </View>

                    </TouchableOpacity>
                )
            }
        )

        return (
            <View style = {styles.container}>
                {letterView}
            </View>
        )

    }


}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00000000'
    }
})





