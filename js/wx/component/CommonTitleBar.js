
import React,{ Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text
} from 'react-native'

const CommonTitleBar = (props) =>{

    return (
        <View style = {styles.container}>
            <View style = {styles.titleBar}>
                {this._renderLeftView(props)}
                {this._renderRightView(props)}
            </View>
        </View>
    )

}

_renderLeftView = (props) =>{
    return (
        <View style = { styles.headLeftStyle } >
            <TouchableOpacity
                onPress = {()=>{
                    props.nav.goBack();
                }}
            >
                <Image source = { require('../imgs/ic_back.png')} style = {styles.btnBack}/>

            </TouchableOpacity>
            <View style = {styles.dividerStyle} />
            <Text style = {{color:'white',fontSize:18,marginLeft:10}} >{props.backTitle}</Text>
        </View>
    )
}


_renderRightView = (props)=>{

    let rightLimg = props.rightLimg
    let rightRimg = props.rightRimg
    let rightView = []

    if( rightLimg && rightRimg){
        rightView.push(
            <View style = {{flexDirection : 'row'}}>
                <TouchableOpacity
                    key = {1}
                    onPress = {()=>{props.onLeftButtonClick ? props.onLeftButtonClick:null}}
                >
                    <View style = {{width:45,height:45,justifyContent:'center'}}>
                        <Image source = {rightLimg} style = {{width:25,height:25}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=>{props.onRightButtonClick ? props.onRightButtonClick:null}}
                >
                    <View style = {{width:45,height:45,justifyContent:'center'}}>
                        <Image source = {rightRimg} style = {{width:25,height:25}} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }else {
        rightView.push(
            <TouchableOpacity
                onPress = {()=>{props.onRightButtonClick ? props.onRightButtonClick:null}}
            >
                <View style = {{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
                    <Image source = {rightRimg} style = {{width:25,height:25}} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style = {{flexDirection:'row'}}>
            {rightView}
        </View>
    )

}

module.exports = CommonTitleBar


const styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    titleBar:{
        backgroundColor:'#3e3a39',
        height:48,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headLeftStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    btnBack:{
        width:35,
        height:35,
        marginLeft:6,
        marginRight:6
    },
    dividerStyle:{
        height:30,
        width:1,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#444444'
    },
    icon:{
        width:25,
        height:25
    }
})









