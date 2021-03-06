import React,{ Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {APP_PADDING_TOP,VIEW_FLEX} from '../constants/layouts';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
            text: ""
        };
    }

    static propTypes = {
        onMenuPress: PropTypes.func
    };

    _onToggleSearch() {
        this.setState({isSearching: !this.state.isSearching});
    }

    render() {
        // TouchableHighlight must have one child (not zero or more than one).
        // If you wish to have several child components, wrap them in a View.

        return <View style={styles.component}>
            <TouchableOpacity style={styles.menubtn} onPress={this.props.onMenuPress}>
                <Icon name={"menu"} size={30} color={"#ffffff"}></Icon>
            </TouchableOpacity>
            {this.state.isSearching ? <TextInput
                style={styles.searchinput}
                placeholder="Type here to discover!"
                placeholderTextColor={"#ffffff"}
                onChangeText={(text) => this.setState({text})}
            /> : <Text style={styles.menutitle}>Liner</Text>}
            <TouchableOpacity style={styles.menubtn} onPress={this._onToggleSearch.bind(this)}>
                {this.state.isSearching ? <Icon name={"arrow-back"} size={30} color={"#ffffff"}></Icon> :
                    <Icon name={"search"} size={30} color={"#ffffff"}></Icon>}
            </TouchableOpacity>
        </View>;
    }
}

const styles = StyleSheet.create({
    component: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: '#3f51b5',
        height: height / 10,
        paddingTop: APP_PADDING_TOP
    },
    searchinput: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: height / 10 - APP_PADDING_TOP,
        color: "#ffffff",
        textAlign: "center"
    },
    menubtn: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: height / 10
    },
    menutitle: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        lineHeight: height / 10,
        textAlign: "center",
        color: "#ffffff",
        letterSpacing: 2,
        fontFamily: "Architects Daughter"
    }
});