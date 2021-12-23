import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
  TextInput,
  Avatar,
  Card,
  Appbar,
  ToggleButton,
  TouchableRipple,
  Checkbox,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const list = [
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 1', date: '23 Dec', time: '12.00 PM'},
];
export default class TrainList extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />
          <Appbar.Content
            title="Train List"
            titleStyle={{fontSize: moderateScale(20)}}
          />
        </Appbar>
        <ScrollView style={{flexGrow: 1, backgroundColor: 'white'}}>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 20,
              marginBottom: 30,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                height: 300,
                width: 5,
                backgroundColor: 'grey',
              }}>
              <View
                style={{height: '30%', width: 5, backgroundColor: 'green'}}
              />
            </View>
            {list.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  //   position: 'absolute',
                  //   top: 100,
                  //   left: 50,
                  marginLeft: 60,
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(17),
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  {item.station}
                </Text>
                <Text style={{fontSize: moderateScale(12), fontWeight: '500'}}>
                  {item.date}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
