/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import App from './js/App';
import {APP_PADDING_TOP} from './js/constants/layouts';

export default class rnstarterkit extends Component {
    render() {
        return (
            <View style={styles.container}>
                <App></App>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('rnstarterkit', () => rnstarterkit);
