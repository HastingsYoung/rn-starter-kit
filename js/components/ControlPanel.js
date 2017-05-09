/**
 * Created by hastings on 9/05/2017.
 */
import React, {PropTypes, Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        onPanelClose: PropTypes.func
    }

    render() {
        return <View style={styles.container}>
            <PanelTop onPanelClose={this.props.onPanelClose}></PanelTop>
            <PanelBody></PanelBody>
        </View>
    }
}

class PanelTop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.panelTop}>
            <TouchableOpacity style={styles.menuBtn} onPress={this.props.onPanelClose?this.props.onPanelClose:()=>{}}>
                <Icon name={"menu"} size={40} color={"#ffffff"}></Icon>
            </TouchableOpacity>
            <Text style={styles.panelTopTitle}>Guangling</Text>
            <Image source={require("../../assets/avatar/p1.jpg")}
                   style={styles.panelTopImage} resizeMode={"stretch"}></Image>
        </View>);
    }
}

class PanelBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.panelBody}>
            <TouchableOpacity style={styles.panelBodyTab}>
                <View style={styles.panelBodyTab}>
                    <Icon name={"find-replace"} size={30} color={"#3f51b5"}></Icon>
                    <Text style={styles.panelBodyTabText}>
                        History
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelBodyTab}>
                <View style={styles.panelBodyTab}>
                    <Icon name={"message"} size={30} color={"#3f51b5"}></Icon>
                    <Text style={styles.panelBodyTabText}>
                        Messages
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelBodyTab}>
                <View style={styles.panelBodyTab}>
                    <Icon name={"settings"} size={30} color={"#3f51b5"}></Icon>
                    <Text style={styles.panelBodyTabText}>
                        Setting
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelBodyTab}>
                <View style={styles.panelBodyTab}>
                    <Icon name={"power-settings-new"} size={30} color={"#3f51b5"}></Icon>
                    <Text style={styles.panelBodyTabText}>
                        Exit
                    </Text>
                </View>
            </TouchableOpacity>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: width * 0.8,
        height: height,
        backgroundColor: "#ffffff"
    },
    panelTop: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: '#3f51b5',
        padding: 10
    },
    menuBtn: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    panelTopTitle: {
        color: "#ffffff",
        fontSize: 25,
        fontFamily: "Architects Daughter",
        marginHorizontal: 10
    },
    panelTopImage: {
        height: 64,
        width: 64,
        borderRadius: 32,
        borderColor: "#ffffff",
        borderWidth: 1,
        marginHorizontal: 10
    },
    panelBody: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%"
    },
    panelBodyTab:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    panelBodyTabText:{
        fontSize: 22,
        fontFamily: "Architects Daughter",
        width: "40%"
    }
});