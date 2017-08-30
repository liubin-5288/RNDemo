

import React , { Component } from 'react'

import {
    StyleSheet,
    Image,
    Button
} from 'react-native';

export default class HomeScressn extends Component{

    static navigationOptions = {
        tabBarLable : "Home",
        tabBarIcon : ({ tintColor }) =>(
                <Image
                    source = { require('../wx/imgs/ic_tag.png')}
                    style = {[styles.icon,{tintColor:tintColor}]}
                />

        )
    }

    render(){
        return (
                <Button
                    onPress = {()=> this.props.navigation.navigate('Notifications')}
                    title = 'Go to notifications'
                />

        )
    }

}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});








