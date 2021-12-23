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
import {connect} from 'react-redux';
import {
  setStartingStationAction,
  setFinalStationAction,
} from '../../Redux/index';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const list = [
  {station: 'Station 2', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 3', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 4', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 5', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 6', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 7', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 8', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 9', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 10', date: '23 Dec', time: '12.00 PM'},
  {station: 'Station 11', date: '23 Dec', time: '12.00 PM'},
];
class TrainList extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />
          <Appbar.Content
            title="Train Status"
            titleStyle={{fontSize: moderateScale(20)}}
          />
        </Appbar>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            padding: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{backgroundColor: 'green', width: 15, height: 15}} />
            <Text
              style={{
                fontSize: moderateScale(15),
                marginStart: 5,
                color: 'black',
              }}>
              Journey Covered
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{backgroundColor: '#dbdbdb', width: 15, height: 15}} />
            <Text
              style={{
                fontSize: moderateScale(15),
                marginStart: 5,
                color: 'black',
              }}>
              Journey Remained
            </Text>
          </View>
        </View>
        <ScrollView
          style={{flexGrow: 1, backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 20,
              marginBottom: 30,
              marginHorizontal: 10,
              flexDirection: 'row',
              width: '100%',
            }}>
            <View
              style={{
                height: '100%',
                width: 5,
                backgroundColor: '#dbdbdb',
              }}>
              <View
                style={{height: '40%', width: 5, backgroundColor: 'green'}}
              />
            </View>
            <View style={{width: '100%'}}>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  marginLeft: 30,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '75%',
                }}>
                <Image
                  source={require('../../images/trainstation.png')}
                  style={{width: 30, height: 30}}
                />
                <View
                  style={{
                    marginStart: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: moderateScale(17),
                        fontWeight: '500',
                        color: 'black',
                        marginVertical: 5,
                      }}>
                      {this.props.startingStation === null
                        ? 'Start Station'
                        : this.props.startingStation}
                    </Text>
                    <Text
                      style={{fontSize: moderateScale(12), fontWeight: '500'}}>
                      {'23 dec'}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Meals')}>
                    <Text
                      style={{color: 'orange', fontSize: moderateScale(15)}}>
                      Order Food
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {list.map((item, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    marginLeft: 30,
                    marginBottom: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '75%',
                  }}>
                  <Image
                    source={require('../../images/trafficlight.png')}
                    style={{width: 30, height: 30}}
                  />
                  <View
                    style={{
                      marginStart: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: moderateScale(17),
                          fontWeight: '500',
                          color: 'black',
                          marginVertical: 5,
                        }}>
                        {item.station}
                      </Text>
                      <Text
                        style={{
                          fontSize: moderateScale(12),
                          fontWeight: '500',
                        }}>
                        {item.date}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Meals')}>
                      <Text
                        style={{color: 'orange', fontSize: moderateScale(15)}}>
                        Order Food
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  marginLeft: 30,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '75%',
                }}>
                <Image
                  source={require('../../images/trainstation.png')}
                  style={{width: 30, height: 30}}
                />
                <View
                  style={{
                    marginStart: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: moderateScale(17),
                        fontWeight: '500',
                        color: 'black',
                        marginVertical: 5,
                      }}>
                      {this.props.finalStation === null
                        ? 'Final Station'
                        : this.props.finalStation}
                    </Text>
                    <Text
                      style={{fontSize: moderateScale(12), fontWeight: '500'}}>
                      {'23 Dec'}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Meals')}>
                    <Text
                      style={{color: 'orange', fontSize: moderateScale(15)}}>
                      Order Food
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    startingStation: state.stationReducer.startingStation,
    finalStation: state.stationReducer.finalStation,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartingStation: parameter => {
      dispatch(setStartingStationAction(parameter));
    },
    setFinalStation: parameter => {
      dispatch(setFinalStationAction(parameter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrainList);
