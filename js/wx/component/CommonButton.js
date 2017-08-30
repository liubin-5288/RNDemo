

import React , { Component } from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight

} from 'react-native'

export default class CommonButton extends Component{

    static defaultProps = {
        leftText:'',
        rightText:'',
        leftImg:'',
        rightImg:'',
        isShowDivider:false,
        imgSize:25
    }

    render(){
        let DividerView = this.props.isShowDivider? <View style = { styles.dividerStyle} /> : null

        return (
            <View style = {{marginTop:this.props.marginTop}}>
                <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={()=>{
                        this.props.onClick()
                    }}
                >
                    <View style = {{backgroundColor:'#ffffff'}} >

                        <View style = {[styles.container,this.props.style]}>
                            {this._renderLeftView(this.props)}
                            {this._renderRightView()}
                        </View>
                        {DividerView}
                    </View>
                </TouchableHighlight>
            </View>
        )

    }

    _renderLeftView = (props) =>{
        return(
            <View style = {styles.leftViewStyle}>
                <Image source = {props.leftImg} style = {{width:props.imgSize,height:props.imgSize}} />
                <Text style={styles.leftTextStyle}>{props.leftText}</Text>
            </View>
        )
    }
    _renderRightView(){
        const {rightText} = this.props;
        if(rightText.length != 0){
            return (
                <View style={styles.rightViewStyle}>
                    <Text >{this.props.rightText}</Text>
                    <Image source={this.props.rightImg} style={styles.icon} />
                </View>
            )
        }else {
            let rightImgView = this.props.rightImg.length!=0 ?
                <Image source={this.props.rightImg} style={styles.icon}/> : null
            return(
                <View style={styles.rightViewStyle}>
                    {rightImgView}
                </View>
            )
        }
    }

}




const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'white',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    leftViewStyle:{
        flexDirection:'row',
    },
    leftTextStyle:{
        textAlignVertical:'center',
        marginLeft:10
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center'

    },
    dividerStyle:{
        height:1,
        backgroundColor:'#e3e3e3',
        marginLeft:10,
        marginRight:10
    },
    icon:{
        width:30,
        height:30,
        marginLeft:5
    }
})




