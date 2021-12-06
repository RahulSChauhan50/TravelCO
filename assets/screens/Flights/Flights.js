import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {TextInput, Avatar, Card, Appbar} from 'react-native-paper';
class Flights extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />
          <Avatar.Icon
            icon="airplane"
            size={moderateScale(40)}
            color="#2176E3"
            style={{backgroundColor: '#dee2e6'}}
          />
          <Appbar.Content
            title="Flights"
            titleStyle={{fontSize: moderateScale(25)}}
          />
        </Appbar>
        <Text> textInComponent </Text>
      </SafeAreaView>
    );
  }
}

export default Flights;
