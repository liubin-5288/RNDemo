

import React , { PureComponent } from 'react'

import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableHighlight

} from 'react-native'


import CommonTitleBar from '../component/CommonTitleBar'
import ChatMsgList from '../chat/ChatMsgList'
import ChatBottomBar from '../component/ChatBottomBar'
import AnimaView from '../component/AnimationFrameScene'

const SPEAK_START = 1
const SPEAK_END = 0

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;  //宽
let totalHeight = Dimensions.get('window').height; //高


export default class ChatDetail extends PureComponent{

    static navigationOptions = {
        header:null
    }



    constructor(props){
        super(props)
        this.state = {
            speakState : SPEAK_END
        }
    }

    render(){
        let param = this.props.navigation.state.params
        let datas = param.chatMsg
        let speakView = this.state.speakState ? this._speakView() : null
        return (
                <View style = {{flex:1 }} >
                    <CommonTitleBar
                        nav = {this.props.navigation}
                        backTitle = {param.senderName}
                        rightRimg = { require('../imgs/ic_linkman.png')}
                        onRightButtonClick={()=>{
                            this._navigateContactDetail(param.senderName)
                        }}
                    />
                    <ChatMsgList
                        chatMsg = {datas}
                        onClickHeader = {this._onClickHeader}
                    />
                    <ChatBottomBar
                        speakCall = {(state)=>{
                            if(state == 1){ //手指按住
                                this.setState({
                                    speakState : SPEAK_START
                                })
                            }else { //手指抬起
                                this.setState({
                                    speakState : SPEAK_END
                                })
                            }

                        }}
                    />
                    {speakView}
                </View>
        )
    }

    _speakView = ()=>{
        return (
            <View style = {styles.dialog} >
                <Image source = { require('../imgs/ic_sp.png')}  />
                <AnimaView
                />
            </View>

        )
    }

    _onClickHeader = (item) =>{
        let navUserName = item.senderId == 10 ? "TigerChain" : this.props.navigation.state.params.senderName
        this._navigateContactDetail(navUserName)
    }

    _navigateContactDetail = (navUserName) => {
        this.props.navigation.navigate('ContactDetail',{
            name: navUserName
        })
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:3,
        position:'absolute',
        left:totalWidth / 3,
        top:totalHeight * 0.4,
        width:totalWidth * 0.4,
        height:totalHeight * 0.2,
        backgroundColor:'rgba(52,52,52,0.5)',
    }
})


