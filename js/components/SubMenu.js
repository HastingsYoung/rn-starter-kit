/**
 * Created by hastings on 8/05/2017.
 */
import React,{ Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');


export default class SubMenu extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        selected: PropTypes.number,
        onSelect: PropTypes.func
    }

    _onTabPress(i) {
        this.props.onSelect(i);
    }

    render() {
        return <View style={styles.component}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Tab active={this.props.selected==0} content={"文章"} onPress={this._onTabPress.bind(this,0)}></Tab>
                <Tab active={this.props.selected==1} content={"订阅"} onPress={this._onTabPress.bind(this,1)}></Tab>
                <Tab active={this.props.selected==2} content={"直播"} onPress={this._onTabPress.bind(this,2)}></Tab>
                <Tab active={this.props.selected==3} content={"笔记"} onPress={this._onTabPress.bind(this,3)}></Tab>
            </ScrollView>
        </View>;
    }
}

class Tab extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        content: PropTypes.string,
        active: PropTypes.bool,
        onPress: PropTypes.func
    }

    render() {
        return <TouchableOpacity style={this.props.active?styles.tabactive:styles.tab} onPress={this.props.onPress}>
            <Text>{this.props.content}</Text>
        </TouchableOpacity>;
    }
}

const styles = StyleSheet.create({
    component: {
        width: width,
        height: height / 20
    },
    scroll: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: width,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff"
    },
    tab: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        padding: 5,
    },
    tabactive: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        padding: 5,
        borderBottomWidth: 3,
        borderColor: "#795548"
    }
});