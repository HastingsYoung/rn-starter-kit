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
import Video from 'react-native-video';

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
            <Video source={require('../../assets/video/broadchurch.mp4')}   // Can be a URL or a local file.
                   ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
                   rate={1.0}                              // 0 is paused, 1 is normal.
                   volume={1.0}                            // 0 is muted, 1 is normal.
                   muted={false}                           // Mutes the audio entirely.
                   paused={false}                          // Pauses playback entirely.
                   resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                   repeat={false}                           // Repeat forever.
                   playInBackground={false}                // Audio continues to play when app entering background.
                   playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                   ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                   progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                   //onLoadStart={this.loadStart}            // Callback when video starts to load
                   //onLoad={this.setDuration}               // Callback when video loads
                   //onProgress={this.setTime}               // Callback every ~250ms with currentTime
                   //onEnd={this.onEnd}                      // Callback when playback finishes
                   //onError={this.videoError}               // Callback when video cannot be loaded
                   //onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   //onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                   style={styles.backgroundVideo} />
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});