

import React , { PureComponent } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity

} from 'react-native'

import ChatMsg from '../jsondata/chatMsg.json'
import CommonTitleBar from '../component/CommonTitleBar'


export default class ChatDetail extends PureComponent{

    static navigationOptions = {
        header:null
    }

    render(){
        return (
            <View >
                <CommonTitleBar
                    nav = {this.props.navigation}
                    backTitle="张三"
                    rightRimg = { require('../imgs/ic_linkman.png')}
                    onRightButtonClick={()=>{
                        alert("hhhhhhhhhhhhhhhhhh")
                    }}
                />

            </View>
        )
    }


}




const styles = StyleSheet.create({
    container:{
        width:50,
        height:50

    },
    rightIcon:{
        width:25,
        height:25,
        marginRight:20,
        backgroundColor:'red'
    }
})


