/**
 * Created by hastings on 10/05/2017.
 */
import React, {Component, PropTypes} from "react";
import {
    ART,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native';

var ReactART = require('ReactNativeART');

const {
    Group,
    Shape,
    Surface,
    Rectangle
    } = ReactART;

const { width, height } = Dimensions.get('window');

export default class StatisticsView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        tabLabel: PropTypes.string,
        tabView: PropTypes.object
    }

    render() {
        return <View style={styles.container} tabLabel={this.props.tabLabel}>
            <Surface width={500} height={500}>
                <Group x={100} y={0}>
                    <Shape
                        d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
                        stroke="#3f51b5"
                        strokeWidth={3}/>
                </Group>
            </Surface>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {

    }
});