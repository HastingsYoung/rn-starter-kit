/**
 * Created by hastings on 8/05/2017.
 */
import React,{ Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class SubscriptionView extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { navigate } = this.props.navigation;

        return <View style={styles.container}>
            <Text>Subscription</Text>
            <Button title="BACK" onPress={() => navigate('Home') }/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        height: height - 100
    }
});