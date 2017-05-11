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
import {arc,scaleArc,pie, scalePie, colors20} from '../utils/graphutils';

var ReactART = require('ReactNativeART');

const {
    Group,
    Shape,
    Surface,
    Rectangle,
    } = ReactART;
const ARTText = ReactART.Text;

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
        let original = [0, 20, 40, 50, 55, 60, 75];
        const gap = 15;
        let arcData = scaleArc(original, 1.5 * Math.PI, gap);
        let a = arc(arcData);

        let s = [];
        let t = [];

        a.forEach((d, i)=> {
            s.push(<Shape key={i}
                          d={d}
                          fill={i>=20?colors20[i-20]:colors20[i]}
                          strokeWidth={1}/>);
            t.push(<ARTText key={i}
                            font={{fontFamily:'Helvetica, Neue Helvetica, Arial',
                        fontSize:10,
                        fontWeight:"bold", // or "normal"
                        fontStyle:"italic" // or "normal"
				    }}
                            fill={i>=20?colors20[i-20]:colors20[i]}
                            x={-75}
                            y={(original.length - i) * gap - 150}
                            alignment="center">
                {"Values :" + original[i]}
            </ARTText>);
        });

        let pieData = scalePie(original, 0, 2 * Math.PI, 0);
        let p = pie(pieData);

        let ns = [];
        let nt = [];

        p.forEach((d, i)=> {
            ns.push(<Shape key={i}
                           d={d}
                           fill={i>=20?colors20[i-20]:colors20[i]}
                           strokeWidth={1}/>);
            nt.push(<ARTText key={i}
                             font={{fontFamily:'Helvetica, Neue Helvetica, Arial',
                        fontSize:10,
                        fontWeight:"bold", // or "normal"
                        fontStyle:"italic" // or "normal"
				    }}
                             fill={i>=20?colors20[i-20]:colors20[i]}
                             x={-75}
                             y={(original.length - i) * gap - 150}
                             alignment="center">
                {"Values :" + original[i]}
            </ARTText>);
        });

        return <View style={styles.container} tabLabel={this.props.tabLabel}>
            <Surface width={width} height={height}>
                <Group x={width/2} y={150}>
                    {s}
                    {t}
                </Group>
                <Group x={width/2} y={450}>
                    {ns}
                    {nt}
                </Group>
            </Surface>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {}
});