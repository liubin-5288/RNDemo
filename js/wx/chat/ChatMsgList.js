

import React , { PureComponent } from 'react'

import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableHighlight

} from 'react-native'

export default class ChatMsgList extends PureComponent{

    _keyExtractor = (item,index) => index;

    render(){
        let datas = this.props.chatMsg
        return (
            <View style = {styles.container} >
                <FlatList
                    data = {datas}
                    renderItem = {this._renderItem}
                    keyExtractor = {this._keyExtractor}
                />
            </View>

        )
    }

    _renderItem = ({item,index}) =>{
        let views = []
        if(item.senderId == 10){ //自己发送右边
            views.push(
                <View style = { styles.selfStyle} key = {1} >
                    <View style = {styles.msgSelfStyle} >
                        <Text style = {styles.msgStyle} > {item.msg} </Text>
                    </View>
                    <TouchableHighlight
                        onPress = {()=> {
                            this.props.onClickHeader(item)
                        }}
                    >
                        <Image source = {require('../imgs/avator.png')} style = {styles.icon} />
                    </TouchableHighlight>
                </View>
            )
        }else {
            views.push(
                <View style = { styles.senderStyle} key = {1}>
                    <TouchableHighlight
                        onPress = {()=> {
                            this.props.onClickHeader(item)
                        }}
                    >
                        <Image source = {require('../imgs/ic_common.png')} style = {styles.icon} />
                    </TouchableHighlight>
                    <View style = {styles.msgSenderStyle} >
                        <Text style = {styles.msgStyle} > {item.msg} </Text>
                    </View>
                </View>
            )
        }
        return (
            <View >
               {views}
            </View>
        )
    }

}




const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingRight:10,
        paddingLeft:10,

    },
    icon:{
        width:50,
        height:50,
    },
    senderStyle:{
        flex:1,
        marginTop:10,
        paddingTop:5,
        paddingBottom:5,
        paddingRight:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    selfStyle:{
        marginTop:10,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    msgSenderStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop:4,
        paddingBottom:4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    msgSelfStyle: {
        backgroundColor: '#9FE658',
        borderRadius: 3,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop:4,
        paddingBottom:4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    msgStyle:{
        fontSize:14,
        alignItems:'center',
    }
})


