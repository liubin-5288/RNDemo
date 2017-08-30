import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Main from './js/wx/Main'

import StudyExamples from './js/test/StudyExamples'

export default class delegate extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Main />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    }

});
