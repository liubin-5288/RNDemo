
import React,{ Component } from 'react'

import {
    View,
    Text
} from 'react-native'

import Test from './DayOne'
import HomeScreen from './HomeScreen'
import Notification from './NotificationScreen'
import { TabNavigator } from 'react-navigation';

export default class StudyExamples extends Component{

    render(){
        return (
            <View style = {{flex: 1,marginTop:10}}>
                <MyApp />
            </View>
        )
    }

}


const MyApp = TabNavigator({
        Home: {
            screen: HomeScreen,
        },
        Notifications: {
            screen: Notification,
        },
    },
    {
        // tab 位于屏幕底部
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#45C018',
            inactiveTintColor: '#999999',
            showIcon: 'true',
            //文字的样式
            labelStyle: {
                fontSize: 12,
                marginTop: 0,
                marginBottom: 0,
            },
            // tabbar 的样式
            style: {
                //这个也可以去掉下划线
                marginBottom: -2,
                backgroundColor: '#FCFCFC',
                borderTopColor: '#e3e3e3',
                borderTopWidth: 1
            },
            //下划线的高度为0 也就可以去掉下划线
            indicatorStyle: {
                height: 0
            }
        },
    });



