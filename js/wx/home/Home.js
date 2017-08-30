/* @flow weak */
import React,{ Component } from 'react'

import {
    View,
    Text
} from 'react-native';

import HomeMessage from '../jsondata/homeMessage.json'
import HemoMessageList from './HomeMessageList'

export default class Home extends Component{

    render() {
        return (
            <HemoMessageList
                datas = {HomeMessage}
                onClick = {this._itemClick}
            />
        );
    }

    _itemClick = (item)=>{
        if(item.itemType == 3){
            this.props.navigation.navigate('ChatDetail')
        }else {
            alert(item.title)
        }
    }



}

