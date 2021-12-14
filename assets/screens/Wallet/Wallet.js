import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
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
import Icon from 'react-native-vector-icons/Ionicons';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import GlobalStyles from '../../Style/GlobalStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/Ionicons';
import Mat from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {TouchableOpacity} from 'react-native-gesture-handler';
const data = [
  {
    iconname: 'bag-checked',
    header: 'My Trips',
    disc: 'All your bookings in one place',
  },
  {
    iconname: 'cash-usd',
    header: 'Recommend and Earn',
    disc: 'Recommend your hotel stay & earn goCash',
  },
  {
    iconname: 'ticket-confirmation',
    header: 'My Coupons',
    disc: 'Your goPasses, coupons & vouchers here',
  },
  {
    iconname: 'needle',
    header: 'My Saved Vaccination Certificate',
    disc: 'View and Manae your Covid Vaccination certificate',
  },
  {
    iconname: 'human-greeting',
    header: 'Refer and Earn',
    disc: 'Refer Goibibo to friends & earn goCash',
  },
  {
    iconname: 'comment-edit',
    header: 'My Contributions',
    disc: 'Review Quetions asked & answered',
  },
  {
    iconname: 'contacts',
    header: 'goContacts',
    disc: 'Sync your phonebook to earn goCash',
  },
  {iconname: 'content-save', header: 'UPI', disc: 'Your saved payment details'},
  {
    iconname: 'credit-card-multiple',
    header: 'My Saved Cards',
    disc: 'Your saved payment details',
  },
];
export default class Wallet extends Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={35}
              color={'white'}
              style={{position: 'absolute', left: 10, top: 10}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: moderateScale(16),
              fontWeight: 'bold',
              color: 'white',
              marginTop: 30,
            }}>
            goCash Balance
          </Text>
          <Text
            style={{
              fontSize: moderateScale(26),
              fontWeight: '700',
              color: 'white',
            }}>
            ₹ 0
          </Text>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: '#054A82',
              width: '95%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
              // opacity: 0.8,
            }}>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 45,
                backgroundColor: '#CEE7CA',
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="trending-up-sharp" size={15} color={'green'} />
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: moderateScale(12),
                fontWeight: '400',
              }}>
              Complete your hotel booking in South Delhi, Gurgaon
            </Text>
            <MaterialCommunityIcons
              name="greater-than"
              color={'white'}
              size={20}
            />
          </View>
        </View>
        <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#DDEBF7',
  },
  topContainer: {
    backgroundColor: '#2274E0',
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  travelContainer: {
    backgroundColor: 'white',
    width: '95%',
    top: 70,
    height: 190,
    borderRadius: 15,
    alignSelf: 'center',
    position: 'absolute',
    elevation: 5,
    // shadowColor: '#ccc',
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    // shadowOffset: {
    //   height: 10,
    //   width: 10,
    // },
  },
});
