/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import NavBar from './js/components/NavBar';

const { width, height } = Dimensions.get('window');

export default class rnstarterkit extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar></NavBar>
                <MapView style={styles.map}
                         initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        position: 'relative',
        display: "flex",
        top: 0,
        left: 0,
        width: width,
        height: height / 10 * 9
    }
});

AppRegistry.registerComponent('rnstarterkit', () => rnstarterkit);
