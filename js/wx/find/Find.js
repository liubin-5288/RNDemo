import React,{ Component } from 'react'

import {
    View,
    StyleSheet
} from 'react-native'
import CommonButton from '../component/CommonButton'

export default class Find extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonButton
                    marginTop={15}
                    leftText="朋友圈"
                    leftImg={require('../imgs/ic_friends_circle.png')}
                    rightImg={require('../imgs/ic_common.png')}
                    onClick={()=>{
                        alert('朋友圈')
                    }}
                />

                <CommonButton
                    marginTop={15}
                    leftText="扫一扫"
                    leftImg={require('../imgs/ic_scan.png')}
                    isShowDivider={true}
                    onClick={()=>{
                        alert('扫一扫')
                    }}
                />
                <CommonButton
                    leftText="摇一摇"
                    leftImg={require('../imgs/ic_shake.png')}

                    onClick={()=>{
                        alert('摇一摇')
                    }}
                />

                <CommonButton
                    marginTop={15}
                    leftText="附近的人"
                    leftImg={require('../imgs/ic_nearby.png')}
                    isShowDivider={true}
                    onClick={()=>{
                        alert('附近的人')
                    }}
                />
                <CommonButton
                    leftText="漂流瓶"
                    leftImg={require('../imgs/ic_bottle.png')}
                    onClick={()=>{
                        alert('漂流瓶')
                    }}
                />

                <CommonButton
                    marginTop={15}
                    leftText="购物"
                    leftImg={require('../imgs/ic_nearby.png')}
                    isShowDivider={true}
                    onClick={()=>{
                        alert('购物')
                    }}
                />

                <CommonButton
                    leftText="游戏"
                    leftImg={require('../imgs/ic_game.png')}
                    rightImg={require('../imgs/ic_common.png')}
                    rightText="测测多少人在玩"
                    onClick={()=>{
                        alert('游戏')
                    }}
                />

                <CommonButton
                    marginTop={15}
                    leftText="小程序"
                    leftImg={require('../imgs/ic_program.png')}
                    onClick={()=>{
                        alert('小程序')
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e3e3e3',
    },
});
