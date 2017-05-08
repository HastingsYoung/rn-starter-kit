/**
 * Created by hastings on 8/05/2017.
 */
import React,{ Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import NavBar from './components/NavBar';
import SubMenu from './components/SubMenu';
import HomeView from './containers/HomeView';
import SubscriptionView from './containers/SubscriptionView';
import LiveStreamView from './containers/LiveStreamView';
import NoteView from './containers/NoteView';
//import ExtendedMapView from './containers/ExtendedMapView';
import {APP_PADDING_TOP,VIEW_FLEX} from './constants/layouts';
import ScrollableTabView from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    _onSelect(i) {
        this.setState({selected: i});
        this.tabView.goToPage(i);
    }

    render() {
        return <View>
            <NavBar></NavBar>
            <ScrollableTabView
                style={styles.tab}
                renderTabBar={() => <SubMenu selected={this.state.selected} onSelect={this._onSelect.bind(this)}></SubMenu>}
                ref={(tabView) => { this.tabView = tabView; }}
            >
                <HomeView tabLabel="Tab #1" tabView={this.tabView}></HomeView>
                <SubscriptionView tabLabel="Tab #2" tabView={this.tabView}></SubscriptionView>
                <LiveStreamView tabLabel="Tab #3" tabView={this.tabView}></LiveStreamView>
                <NoteView tabLabel="Tab #4" tabView={this.tabView}></NoteView>
            </ScrollableTabView>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height - APP_PADDING_TOP
    },
    tab: {
        height: height - APP_PADDING_TOP - height / 20 * 3
    }
});

//const SubViews = StackNavigator({
//    Home: {screen: HomeView},
//    Subscription: {screen: SubscriptionView},
//    Map: {screen: ExtendedMapView},
//}, {
//    initialRouteName: "Home",
//    cardStyle: {
//        flex: 1,
//        flexDirection: "column",
//        justifyContent: 'center',
//        alignItems: 'center',
//        width: width,
//        height: height - APP_PADDING_TOP * 2
//    },
//    headerMode: "none"
//});