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
import {arc, scaleArc, pie, scalePie, rect, colors20} from '../utils/graphutils';

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
        const gap = 10;
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
                            y={(original.length - i) * gap - 100}
                            alignment="center">
                {"Day" + (i + 1) + " :" + original[i]}
            </ARTText>);
        });

        let pieData = scalePie(original, 0, 2 * Math.PI, 0);
        let p = pie(pieData, 10, 80);

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
                {"Day" + (i + 1) + " :" + original[i]}
            </ARTText>);
        });

        return <View style={styles.container} tabLabel={this.props.tabLabel}>
            <Surface width={width} height={height}>
                <Group x={width/2} y={150}>
                    {s}
                    {t}
                </Group>
                <Group x={width/2} y={400}>
                    {ns}
                    {nt}
                </Group>
                <Group x={width/2} y={450}>
                    <Shape
                        d={rect({x:-175,y:60},{x:width - 15 - 190,y:120}, 15)}
                        fill={"#ffffff"}
                        strokeWidth={1}/>
                    <ARTText fill={"#000000"} width={width * 0.8} height={60} font={{fontFamily:'Helvetica, Neue Helvetica, Arial',
                        fontSize:15,
                        fontWeight:"800",
                        fontFamily:'Architects Daughter',
				    }} alignment="center" x={0} y={80}>
                        Effort you put in over the past 7 days
                    </ARTText>
                </Group>
            </Surface>
            <View style={styles.captionBoard}>
                <Text style={styles.caption}>
                </Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    captionBoard: {
        height: 60,
        width: width * 0.75,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        borderColor: "#304ffe"
    },
    caption: {
        fontSize: 15,
        fontWeight: "200"
    }
});