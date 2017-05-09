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
import Drawer from 'react-native-drawer';
import ControlPanel from './components/ControlPanel';
//import ExtendedMapView from './containers/ExtendedMapView';
import {APP_PADDING_TOP,VIEW_FLEX} from './constants/layouts';
import ScrollableTabView from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            drawer: false
        }
    }

    toggleDrawer() {
        if (this.state.drawer) {
            this._drawer.close();
        } else {
            this._drawer.open();
        }
        this.setState({drawer: !this.state.drawer});
    }

    closeDrawer() {
        if (this.state.drawer) {
            this._drawer.close();
            this.setState({drawer: !this.state.drawer});
        }
    }

    _onCloseDrawer() {
        if (this.state.drawer) {
            this.setState({drawer: !this.state.drawer});
        }
    }

    _onSelect(i) {
        this.setState({selected: i});
        this.tabView.goToPage(i);
    }

    render() {
        return <View style={styles.container}>
            <Drawer
                type={"overlay"}
                ref={(ref) => this._drawer = ref}
                tapToClose={true}
                tweenHandler={Drawer.tweenPresets.parallax}
                styles={drawerWrapper}
                panCloseMask={.25}
                content={<ControlPanel onPanelClose={this.closeDrawer.bind(this)}/>}
                onClose={this._onCloseDrawer.bind(this)}
                tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 }})}
            >
                <NavBar onMenuPress={this.toggleDrawer.bind(this)}></NavBar>
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
            </Drawer>
            {/*<ScrollableTabView
             style={styles.tab}
             renderTabBar={() => <SubMenu selected={this.state.selected} onSelect={this._onSelect.bind(this)}></SubMenu>}
             ref={(tabView) => { this.tabView = tabView; }}
             >
             <HomeView tabLabel="Tab #1" tabView={this.tabView}></HomeView>
             <SubscriptionView tabLabel="Tab #2" tabView={this.tabView}></SubscriptionView>
             <LiveStreamView tabLabel="Tab #3" tabView={this.tabView}></LiveStreamView>
             <NoteView tabLabel="Tab #4" tabView={this.tabView}></NoteView>
             </ScrollableTabView>*/}
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
        height: height
    },
    tab: {
        height: height - APP_PADDING_TOP - height / 20 * 3
    }
});

const drawerWrapper = {
    drawer: {
        position: "relative",
        left: 0,
        height: height
    },
    main: {},
};

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