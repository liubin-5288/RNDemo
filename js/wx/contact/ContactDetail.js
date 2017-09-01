

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,

} from 'react-native';

import CommonTitleBar from '../component/CommonTitleBar'
import Button from '../component/Button'


export default class ContactDetail extends Component{

    static navigationOptions = {
        header:null
    }


    render(){
        let params = this.props.navigation.state.params

        return (
            <View style = {styles.container}>
                <CommonTitleBar
                    nav = {this.props.navigation}
                    backTitle="详细资料"
                    rightRimg={require('../imgs/ic_add.png')}
                    onRightButtonClick={()=>{
                        alert('瞧瞧')
                    }}
                />

                <View style={styles.itemViewStyle}>
                    <Image source = {require('../imgs/ic_common.png')} style={{width:65,height:65}} />
                    <Text style={{alignSelf:'flex-start',marginLeft:22,fontSize:16,color:'black'}}>{params.name}</Text>
                </View>

                <View style={styles.itemViewStyle}>
                    <Text style={{alignSelf:'flex-start',fontSize:16,color:'black'}}>设置备注和标签</Text>
                </View>

                <View style={{flexDirection:'column',backgroundColor:'white',marginTop:15}}>
                    <View style={styles.itemRootViewStyle2}>
                        <Text style={{alignSelf:'flex-start',fontSize:16,color:'black',width:80}}>地区</Text>
                        <Text style={{marginLeft:10}}>中国 陕西</Text>
                    </View>
                    <View style={styles.dividerStyle} />

                    <View style={[styles.itemViewStyle,{marginTop:0}]}>
                        <Text style={{fontSize:16,color:'black',width:80}}>个人相册</Text>
                        <View style={{flexDirection:'row',marginLeft:10}}>
                            <Image source={require('../imgs/ic_common.png')} style={[styles.icon,{width:60,height:60}]} />
                            <Image source={require('../imgs/ic_common.png')} style={[styles.icon,{width:60,height:60}]} />
                            <Image source={require('../imgs/ic_common.png')} style={[styles.icon,{width:60,height:60}]} />
                        </View>

                    </View>

                    <View style={styles.dividerStyle} />

                    <View style={[styles.itemViewStyle,{marginTop:0}]}>
                        <Text style={{fontSize:16,color:'black',width:80}}>更多</Text>
                    </View>
                </View>
                <View style={{marginTop:15,paddingLeft:15,paddingRight:15}}>

                    <Button
                        text="发消息"
                        style={{color:'white'}}
                        onClick={()=>{
                            alert('asdfa')
                        }}
                    />
                </View>
                <View style={{marginTop:15,paddingLeft:15,paddingRight:15}}>

                    <Button
                        text="视频聊天"
                        style={{color:'black',backgroundColor:'white',borderWidth:1,borderColor:'#e3e3e3'}}
                        onClick={()=>{
                            alert('asdfa')
                        }}
                    />
                </View>

            </View>
        )

    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e3e3e3'
    },
    // 条目 的样式
    itemViewStyle:{
        backgroundColor:'white',
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10
    },
    // 条目 样式2
    itemRootViewStyle2:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10
    },
    // 图片样式
    icon:{
        marginRight:10
    },
    // 分隔线样式
    dividerStyle:{
        height:1,
        backgroundColor:'#e3e3e3',
        marginRight:15,
        marginLeft:15,
    }
})













