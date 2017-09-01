

import React,{ PureComponent } from 'react'
import {
    View,
    Animated,
    Image
} from 'react-native'

export default class AnimaView extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1), //设置初始值
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,//初始值
            {
                toValue: 0,
                delay:100,
            }//结束值
        ).start();//开始
    }
    render() {
        return (
            <View style = {{alignItems:'center',backgroundColor:'red'}}>
                <Animated.View style={{opacity: this.state.fadeAnim}}> 
                   <Image source = { require('../imgs/ic_sp_1.png')} style = {{width:20,height:20}} />
                </Animated.View>
                <Animated.View style={{opacity: this.state.fadeAnim}} >
                   <Image source = { require('../imgs/ic_sp_2.png')} style = {{width:20,height:20}} />
                </Animated.View>
                <Animated.View style={{opacity: this.state.fadeAnim}}>
                   <Image source = { require('../imgs/ic_sp_3.png')}  style = {{width:20,height:20}} />
                </Animated.View>
                <Animated.View style={{opacity: this.state.fadeAnim}}>
                   <Image source = { require('../imgs/ic_sp_4.png')} style = {{width:20,height:20}}  />
                </Animated.View>
                <Animated.View style={{opacity: this.state.fadeAnim}}>
                   <Image source = { require('../imgs/ic_sp_5.png')}  style = {{width:20,height:20}} />
                </Animated.View>
                <Animated.View style={{opacity: this.state.fadeAnim}}>
                   <Image source = { require('../imgs/ic_sp_6.png')}  style = {{width:20,height:20}} />
                </Animated.View>
            </View>
        );
    }

}


