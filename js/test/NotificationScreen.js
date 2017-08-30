

import React , { Component } from 'react'

import {
    StyleSheet,
    Image,
    Button
} from 'react-native';

export default class NotificationScreen extends Component{

    static navigationOptions = {
        tabBarLable : "Notifications",
        tabBarIcon : ({ tintColor }) =>(
                <Image
                    source = { require('../wx/imgs/ic_common.png')}
                    style = {[styles.icon,{tintColor:tintColor}]}
                />

        )
    }

    render(){
        return (
            <Button
                onPress = {()=> this.props.navigation.goBack()}
                title = 'Go to home'
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








