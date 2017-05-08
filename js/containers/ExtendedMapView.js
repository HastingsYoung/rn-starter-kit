/**
 * Created by hastings on 8/05/2017.
 */
import React,{ Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import {APP_PADDING_TOP} from '../constants/layouts';
const { width, height } = Dimensions.get('window');

export default class ExtendedMapView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;

        return (<MapView style={styles.map}
                         initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}/>);
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        display: "flex",
        top: 0,
        left: 0,
        width: width,
        height: height - 100
    }
});