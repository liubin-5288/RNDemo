/* @flow weak */
import React,{ Component } from 'react'

import {
    View,
    Text
} from 'react-native';

import HomeMessage from '../jsondata/homeMessage.json'
import HemoMessageList from './HomeMessageList'
import ChatMessage from '../jsondata/chatMsg.json'

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
        let datas = ChatMessage.data
        let msgs = []
        //如果接收或者发送人为当前item id,就说明是正确聊天记录
        for(var i=0;i < datas.length; i++){
            let data = datas[i]
            if(data.receiverId == item.id || data.senderId == item.id){
                msgs.push(data)
            }
        }
        if(item.itemType == 3 && msgs.length > 0){
            this.props.navigation.navigate('ChatDetail',{
                senderName : item.title, //跳转时传递的参数
                hImg : require('../imgs/ic_common.png'),
                chatMsg : msgs,
            })
        }else {
            alert(item.title)
        }
    }


}

