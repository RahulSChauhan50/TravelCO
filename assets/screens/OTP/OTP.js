import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1, paddingTop: 20}}>
        <View
          style={{
            paddingHorizontal: 40,
            width: '100%',
          }}>
          <Image
            source={require('../../images/otp.jpg')}
            style={{
              height: '40%',
              width: 300,
              alignSelf: 'center',
              marginRight: 20,
            }}
            resizeMode={'cover'}
          />
          <View style={{height: '40%'}}>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '700',
                color: 'black',
                marginBottom: 10,
              }}>
              OTP Varification
            </Text>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontWeight: '500',
                color: 'black',
                marginBottom: 10,
              }}>
              Enter otp sent on your mobile number
            </Text>
            <TextInput
              mode="outlined"
              activeOutlineColor="blue"
              label="Enter OTP"
              value={this.state.phone}
              onChangeText={text => this.setState({phone: text})}
              outlineColor="black"
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#2274E0',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20,
                height: 35,
                elevation: 10,
              }}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontWeight: '500',
                  color: 'white',
                }}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default OTP;
