

import React,{ PureComponent } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    PixelRatio,
    TouchableOpacity
} from 'react-native'

const BAR_STATE_SHOW_KEYBOARD = 1;
const BAR_STATE_SHOW_RECORDER = 2;

export default class ChatBottomBar extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            soundState:BAR_STATE_SHOW_KEYBOARD
        }
    }

    render(){
        let vIcon = this.state.soundState == BAR_STATE_SHOW_KEYBOARD
             ? require('../imgs/ic_chat_sound.png') : require('../imgs/ic_chat_keyboard.png');
        return (
            <View style = {styles.footerStyle} >
                <TouchableOpacity activeOpacity = {0.5} onPress ={this._handlerPress.bind(this,"soundBtn")} >
                    <Image source = {vIcon} style = {styles.icon} />
                </TouchableOpacity>
                {this._soundStateView()}
                <TouchableOpacity activeOpacity = {0.5} onPress ={this._handlerPress.bind(this,"emojiBtn")} >
                    <Image source = {require('../imgs/ic_chat_emoji.png')} style = {styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {0.5} onPress = {this._handlerPress.bind(this,"moreBtn")} >
                    <Image source = {require('../imgs/ic_chat_add.png')} style = {[styles.icon,{marginLeft:8}]} />
                </TouchableOpacity>
            </View>
        )
    }

    _soundStateView = ()=>{
        let view = [] ;
        if(this.state.soundState == BAR_STATE_SHOW_KEYBOARD ){
            view.push( <TextInput key = {2} style = { styles.inputStyle } /> )
        }else {
            view.push(
                <View key = {2} style = {{flex:1,alignItems:'center'}} >
                    <TouchableOpacity activeOpacity = {0.5}
                                      onPressIn = {this._handlerPress.bind(this,"speakBtn")}
                                      onPressOut = {this._handlerPress.bind(this,"speakEndBtn")}
                    >
                        <View style = {styles.soundStyle} >
                            <Text>按 住 说 话</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

        return (view)
    }

    _handlerPress = (tag)=>{
        if("soundBtn" == tag){
            if(this.state.soundState == BAR_STATE_SHOW_KEYBOARD){
                this.setState({
                    soundState : BAR_STATE_SHOW_RECORDER
                })
            }else {
                this.setState({
                    soundState : BAR_STATE_SHOW_KEYBOARD
                })
            }
        }else if("emojiBtn" == tag){
            alert('图片')
        }else if("moreBtn" == tag){
            alert('更多')
        }else if("speakBtn" == tag){
            this.props.speakCall(1)
        }else if("speakEndBtn" == tag){
            this.props.speakCall(0)
        }
    }

}


const styles = StyleSheet.create({
    footerStyle:{
        backgroundColor:'#F4F4F4',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
    },
    icon:{
        width:35,
        height:35
    },
    soundStyle:{
        borderRadius:3,
        borderWidth:1/PixelRatio.get() ,
        borderColor:'#6E7377',
        paddingRight:50,
        paddingLeft:50,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
    },
    inputStyle:{
        flex : 1,
        paddingLeft:5,
        paddingRight:5,
        marginLeft:5,
        marginRight:5,
    }

})

