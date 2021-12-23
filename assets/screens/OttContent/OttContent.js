import React, {Component} from 'react';
import {Text, View, SafeAreaView, StatusBar, Button} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Video from 'react-native-video';
class OttContent extends Component {
  videoError = e => {
    console.log(e);
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="black" />
        <View style={{ width: '100%'}}>
          <Video
            source={require('../../images/videoplayback.mp4')}
            ref={ref => {
              this.player = ref;
            }}
            resizeMode="contain"
            style={{flex: 1,backgroundColor:'black'}}
            onError={this.videoError}
            controls={true}
          />
        </View>
        <Button title="play" />
      </SafeAreaView>
    );
  }
}

export default OttContent;
