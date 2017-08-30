/* @flow weak */
import React,{ Component } from 'react'

import {
    View,
    Text
} from 'react-native';

import homeMessage from '../jsondata/homeMessage.json'
import HemoMessageList from './HomeMessageList'

export default class Home extends Component{

    render() {
        return (
            <HemoMessageList
                datas = {homeMessage}/>
        );
    }

}

