import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1, paddingTop: 20}}>
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
          <View style={{height: '30%'}}>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '700',
                color: 'black',
                marginVertical: '3%',
              }}>
              Mobile Number
            </Text>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontWeight: '500',
                color: 'black',
                marginBottom: '3%',
              }}>
              Enter your mobile number for OTP varification
            </Text>
            <TextInput
              mode="outlined"
              activeOutlineColor="blue"
              label="Phone Number"
              value={this.state.phone}
              onChangeText={text => this.setState({phone: text})}
              outlineColor="black"
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OTP')}
              style={{
                backgroundColor: '#2274E0',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: '7%',
                height: 35,
                elevation: 10,
              }}>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontWeight: '500',
                  color: 'white',
                }}>
                Generate OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
