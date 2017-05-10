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
import {APP_DISTANCE_TOP} from '../constants/layouts';
import {arc,scaleArc,colors20} from '../utils/graphutils';

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
        let graphData = scaleArc([0, 20, 40, 60], 1.5 * Math.PI, 15);
        let a = arc(graphData.startAngle, graphData.endAngle, graphData.inner, graphData.outer);

        let s = [];

        a.forEach((d, i)=> {
            s.push(<Shape key={i}
                          d={a[i]}
                          fill={i>=20?colors20[i-20]:colors20[i]}
                          strokeWidth={1}/>);
        });

        return <View style={styles.container} tabLabel={this.props.tabLabel}>
            <Surface width={width} height={height}>
                <Group x={width/2} y={height/2 - APP_DISTANCE_TOP}>
                    {s}
                </Group>
            </Surface>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {}
});