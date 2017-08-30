
import React,{ Component } from 'react'

import {
    Image,
} from 'react-native'

export default class TabBarIcon extends Component{


    render(){
        let selectImage = this.props.selectedImage?this.props.selectedImage:this.props.normalImage
        return (
            <Image
                source = { this.props.focused ? selectImage : this.props.normalImage}
                style={{ width: 25, height: 25 }}
            />
        )
    }
}




