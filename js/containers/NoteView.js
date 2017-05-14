/**
 * Created by hastings on 9/05/2017.
 */
import React,{ Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {APP_PADDING_TOP} from '../constants/layouts';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export default class NoteView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        tabLabel: PropTypes.string,
        tabView: PropTypes.object
    }

    render() {

        return <View style={styles.container} tabLabel={this.props.tabLabel}>
            <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={true} scrollEnabled={true}>
                <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Correct"}></Segment>
                <View style={styles.divider}></View>
                <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Review"}></Segment>
                <View style={styles.divider}></View>
                <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Review"}></Segment>
                {/*<View style={styles.divider}></View>
                 <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Correct"}></Segment>
                 <View style={styles.divider}></View>
                 <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Correct"}></Segment>
                 <View style={styles.divider}></View>
                 <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Correct"}></Segment>
                 <View style={styles.divider}></View>
                 <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Review"}></Segment>
                 <View style={styles.divider}></View>
                 <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Correct"}></Segment>
                 <View style={styles.divider}></View>
                 <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Correct"}></Segment>
                 <View style={styles.divider}></View>
                 <Segment title={"XXXXXXX"} date={new Date().toDateString()} status={"Correct"}></Segment>*/}
            </ScrollView>
        </View>;
    }
}

class Segment extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        title: PropTypes.string,
        date: PropTypes.string,
        status: PropTypes.string
    }

    render() {
        return <View style={styles.segment}>
            <View style={styles.leftIcon}>
                <Icon name={"description"} size={35} color={"#ffffff"}></Icon>
            </View>
            <View style={styles.segmentContent}>
                <View style={styles.segmentTitleWrapper}><Text
                    style={styles.segmentTitle}>{this.props.title}</Text></View>
                <View style={styles.foot}>
                    <Text style={styles.status}>{this.props.status}</Text>
                    <Text style={styles.date}>{this.props.date}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.segmentPlus}>
                <Icon name={"add"} size={25} color={"#000000"}></Icon>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: height - APP_PADDING_TOP - height / 20 * 3,
        backgroundColor: "#fff" // make sure no white line in lines
    },
    divider: {
        height: 1,
        width: "70%",
        marginLeft: 50,
        backgroundColor: "#000"
    },
    segment: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        backgroundColor: "#ffffff",
        paddingVertical: 5,
        maxHeight: 100
    },
    leftIcon: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: "#2f2f2f",
        padding: 8,
        marginLeft: 10,
        height: 50,
        width: 50
    },
    list: {
        // do not set flex here, otherwise will not scroll
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: width,
    },
    segmentContent: {
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        height: "100%",
        flex: 7,
        paddingHorizontal: 10
    },
    segmentTitleWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "100%",
        flex: 1
    },
    segmentTitle: {
        fontSize: 20,
        fontFamily: "Arimo"
    },
    foot: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        height: 30,
        width: "100%"
    },
    date: {
        fontSize: 12,
        color: "#5f5f5f",
        fontFamily: "Arimo"
    },
    status: {
        fontSize: 12,
        color: "#5f5f5f",
        fontFamily: "Arimo"
    },
    segmentPlus: {
        position: "absolute",
        right: 5,
        top: 5
    }
});