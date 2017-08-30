import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import DayOne from './js/test/DayOne';
export default class setup extends Component {
    constructor(props){
        super(props)
        this.state = ({
            show : true,
        })
    }
    render() {
        var view = this.state.show? <DayOne /> : null
        var title = this.state.show? '点我取消哦':'点我添加哦'
        return (<View style={styles.container}>
            <Text
                onPress = { ()=>{
                    this.setState({
                        show: !this.state.show,
                    })
                }}
            >
                {title}
            </Text>
            { view }
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
