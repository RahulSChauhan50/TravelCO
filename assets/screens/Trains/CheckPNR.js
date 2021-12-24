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
  TextInput,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
  Avatar,
  Card,
  Appbar,
  ToggleButton,
  TouchableRipple,
  Checkbox,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';

export default class CheckPNR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      train: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />
          <Appbar.Content
            style={{alignSelf: 'center', marginLeft: 50}}
            title="Check PNR"
            titleStyle={{fontSize: moderateScale(19)}}
          />
        </Appbar>
        <ScrollView style={{flexGrow: 1, backgroundColor: 'white'}}>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontWeight: 'bold',
                margin: 10,
                color: 'black',
              }}>
              Check the booking status of your upcoming trip
            </Text>
            <View style={{paddingHorizontal: 10, elevation: 10}}>
              <TextInput
                placeholder="10 digit PNR Number"
                placeholderTextColor={'grey'}
                backgroundColor={'white'}
                onChangeText={text => this.setState({train: text})}
                value={this.state.train}
                underlineColorAndroid={'#ABABAB'}
                style={{
                  flex: 1,
                  color: 'grey',
                  fontSize: moderateScale(20),
                }}
              />
            </View>
            <View
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="lightbulb-on"
                color={'#FFD700'}
                size={30}
              />
              <Text
                style={{
                  fontSize: moderateScale(13),
                  marginLeft: 10,
                  color: 'grey',
                }}>
                Know how to find your PNR,{' '}
              </Text>
              <Text style={{color: '#47AFF1', fontSize: moderateScale(13)}}>
                Click here
              </Text>
            </View>
            <Card
              style={{
                height: 200,
                width: '90%',
                elevation: 10,
                marginBottom: 10,
                marginTop: 20,
                alignSelf: 'center',
              }}>
              <Image
                resizeMode="cover"
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
                }}
                style={{
                  height: 200,
                  width: '100%',
                  alignSelf: 'center',
                }}
              />
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
