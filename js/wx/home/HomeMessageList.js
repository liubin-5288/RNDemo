
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight
} from 'react-native';

export default class HomeMessageList extends PureComponent{

    keyExtractor = (item,index) => item.id;

    render(){
        let recivedData = this.props.datas;
        let datas = recivedData.data;

        return (
            <View>
                <FlatList
                    data={datas}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    ItemSeparatorComponent={this.separatorComponent}
                />
            </View>
        );

    }

    renderItem = ({item,index}) =>{
        return (
            <TouchableHighlight
                activeOpactity={0.7}
                underlayColor="#e3e3e3"
                onPress = { ()=> {
                    alert(item.title)
                }}
            >
                <View style={styles.itemRootViewStyle}>
                    <Image source={require('../imgs/ic_common.png')} style={{width:50,height:50}}></Image>
                    <View style={{flexDirection:'row',marginLeft:8,flex:1,justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                            <Text style={styles.subTitleStyle}>{item.subtitle}</Text>
                        </View>
                        <Text style={styles.timeStyle}>{item.time}</Text>
                    </View>
                </View>

            </TouchableHighlight>
        );
    }
    separatorComponent = ()=>{
        return(
            <View style={{height:1,backgroundColor:'#e3e3e3'}}></View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // 条目根布局样式
    itemRootViewStyle:{
        flexDirection:'row',
        padding:10
    },
    // 标题的样式
    titleStyle:{
        fontSize:16,
        color:'black'
    },
    //副标题的样式
    subTitleStyle:{
        marginTop:4,
        color:'gray'
    },
    //时间字符的样式
    timeStyle:{
        fontSize:12,
        color:'gray',
        alignSelf:'flex-start'
    }
})



