import React,{ Component } from 'react'

import {
    View,
    StyleSheet
} from 'react-native'

import CommonButton from '../component/CommonButton'


export default class Me extends Component{

    render(){
        return (
            <View style = {styles.container}>

                <CommonButton
                    style = {{height:70}}
                    imgSize = {50}
                    marginTop = {15}
                    leftText = "TigerChain"
                    leftImg = {require('../imgs/avator.png')}
                    rightImg = {require('../imgs/ic_qr_code.png')}
                    onClick={ ()=>{
                        alert('点击')
                    }}
                    />
                <CommonButton
                    marginTop = {15}
                    leftText = "收藏"
                    leftImg  = {require('../imgs/ic_collect.png')}
                    isShowDivider = {true}
                    onClick={ ()=>{
                        alert('收藏')
                    }}
                />

                <CommonButton
                    marginTop={15}
                    leftText="钱包"
                    leftImg={require('../imgs/ic_wallet.png')}
                    onClick={()=>{
                        alert('钱包')
                    }}
                />
                <CommonButton
                    leftText="相册"
                    leftImg={require('../imgs/ic_gallery.png')}
                    isShowDivider={true}
                    onClick={()=>{
                        alert('相册')
                    }}
                />
                <CommonButton
                    leftText="卡包"
                    leftImg={require('../imgs/ic_kabao.png')}
                    isShowDivider={true}
                    onClick={()=>{
                        alert('卡包')
                    }}
                />
                <CommonButton
                    leftText="表情"
                    leftImg={require('../imgs/ic_emoji.png')}
                    onClick={()=>{
                        alert('表情')
                    }}
                />

                <CommonButton
                    marginTop={15}
                    leftText="设置"
                    leftImg={require('../imgs/ic_settings.png')}
                    isShowDivider={true}
                    onClick={()=>{
                        alert('设置')
                    }}
                />
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})


