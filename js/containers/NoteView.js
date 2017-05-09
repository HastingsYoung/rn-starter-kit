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
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
                <Segment title={"XXXXXXX"} chose={"X"} answer={"X"}></Segment>
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
        chose: PropTypes.string,
        answer: PropTypes.string
    }

    render() {
        return <View style={styles.segment}>
            <View><Text style={styles.segmentTitle}>Title: {this.props.title}</Text></View>
            <View>
                <Text style={styles.segmentChose}>You chose: {this.props.chose}</Text>
                <Text style={styles.segmentAnswer}>Answer: {this.props.answer}</Text>
            </View>
            <TouchableOpacity style={styles.segmentPlus}>
                <Icon name={"add"} size={25} color={"#000000"}></Icon>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        height: height - APP_PADDING_TOP - height / 20 * 3
    },
    list: {
        // do not set flex here, otherwise will not scroll
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: width,
    },
    segment: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: "80%",
        borderRadius: 5,
        borderColor: "#c5cae9",
        borderWidth: 2,
        marginVertical: 10,
        backgroundColor: "#efefef",
        paddingVertical: 15
    },
    segmentTitle: {
        fontSize: 15
    },
    segmentChose: {
        fontSize: 15
    },
    segmentAnswer: {
        fontSize: 15
    },
    segmentPlus: {
        position: "absolute",
        right: 5,
        top: 5
    }
});