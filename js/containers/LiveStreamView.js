/**
 * Created by hastings on 9/05/2017.
 */
import React,{ Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class LiveStreamView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        tabLabel: PropTypes.string,
        tabView: PropTypes.object
    }

    render() {

        return <View style={styles.container} tabLabel={this.props.tabLabel}>
            <Text>LiveStream</Text>
            <Button title="BACK" onPress={() => this.props.tabView.goToPage(0) }/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    }
});