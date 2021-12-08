import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ProgressBar, Colors, Appbar} from 'react-native-paper';
import FIcon from 'react-native-vector-icons/Ionicons';
import Mat from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale} from 'react-native-size-matters';
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
export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
              <Icon
                name={'arrow-left'}
                size={30}
                color={'white'}
                style={styles.backArrow}
                onPress={() => this.props.navigation.goBack()}
              />
              <Text style={styles.pageTitle}>Profile</Text>
              <View style={styles.bell}>
                <Icon name={'bell-outline'} size={30} color={'white'} />
              </View>
            </View>
            <View style={styles.travelContainer}>
              <View style={styles.details}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
                  }}
                  style={styles.userImg}
                  resizeMode={'cover'}
                />
                <View style={styles.camera}>
                  <Icon name={'camera'} size={15} color={'white'} />
                </View>
                <View style={styles.userContainer}>
                  <Text style={styles.user}>Hey Travler</Text>
                  <Text style={styles.number}>9876543219</Text>
                </View>
                <View style={styles.edit}>
                  <Mat name={'edit'} size={15} color={'black'} />
                </View>
              </View>
              <View style={styles.progress}>
                <ProgressBar
                  progress={0.25}
                  color={'#E93E02'}
                  style={{
                    borderRadius: 8,
                    height: 6,
                    backgroundColor: '#D9D9D7',
                  }}
                />
              </View>
              <View style={styles.pb}>
                <Text style={styles.cp}>Your profile is 25% complete</Text>
                <Text style={styles.add}>add Name</Text>
              </View>
            </View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#F7B401', '#ffffff', '#ffffff']}
              style={styles.vaccine}>
              <View style={styles.vdeatils}>
                <Image
                  source={require('../../images/vaccine.png')}
                  style={styles.inject}
                  resizeMode={'cover'}
                />
                <View style={styles.vactext}>
                  <Text style={styles.getVac}>Got Vaccinated?</Text>
                  <Text style={{fontSize: 14, top: 3}}>
                    Download your Covid vaccination certificate now
                  </Text>
                </View>
              </View>
              <View style={styles.pass}>
                <View style={styles.border}>
                  <Icon
                    name={'passport'}
                    size={moderateScale(30)}
                    color={'blue'}
                  />
                  <Text style={styles.txt}>
                    Link passport to your certificate
                  </Text>
                </View>
                <View style={[styles.border, {marginLeft: '5%'}]}>
                  <Icon name={'download'} size={30} color={'blue'} />
                  <Text style={styles.txt}>Download certificate</Text>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
              colors={['#F7B5B6', '#ffffff', '#ffffff']}
              style={styles.vecContainer}>
              <Text style={styles.trbtxt}>goTribe</Text>
              <Text style={styles.trbdisc}>
                Travel for Rs 30000 to become a goTribe Star!
              </Text>
            </LinearGradient>
            <View
              style={{
                width: '95%',
                backgroundColor: 'white',
                alignSelf: 'center',
                height: 80,
                marginBottom: 30,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    fontSize: moderateScale(14),
                    left: 20,
                    top: 20,
                  }}>
                  goCash Balance
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: moderateScale(13),
                    left: 20,
                    top: 25,
                  }}>
                  Reward cash & refund amounts
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <FontAwesome
                  name={'coins'}
                  size={30}
                  color={'#E7B61C'}
                  style={{alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontSize: moderateScale(20),
                    marginLeft: 10,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlignVertical: 'center',
                  }}>
                  ₹ 0
                </Text>
                <Icon
                  name={'greater-than'}
                  size={20}
                  color={'blue'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
              </View>
            </View>

            {data.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  backgroundColor: 'white',
                  height: 60,
                }}>
                <Icon
                  name={item.iconname}
                  size={30}
                  color={'black'}
                  style={{left: 10, alignSelf: 'center'}}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginLeft: 30,
                  }}>
                  <Text style={styles.headertxt}>{item.header}</Text>
                  <Text style={styles.disctxt}>{item.disc}</Text>
                </View>
              </View>
            ))}

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                backgroundColor: 'white',
                height: 60,
              }}>
              <FIcon
                name={'settings'}
                size={30}
                color={'black'}
                style={{left: 10, alignSelf: 'center'}}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginLeft: 30,
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Settings
                </Text>
                <Text style={styles.disctxt}>
                  Push notifications, go contacts
                </Text>
              </View>
            </View>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#F78025', '#ffffff', '#ffffff']}
              style={{
                width: '95%',
                backgroundColor: 'white',
                alignSelf: 'center',
                height: 80,
                marginTop: 15,
                marginBottom: 50,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../images/rating.png')}
                style={styles.rate}
                resizeMode={'cover'}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginLeft: 30,
                }}>
                <Text style={styles.headertxt}>Rate our App</Text>
                <Text style={styles.disctxt}>
                  We love appreciation & feedbacks
                </Text>
              </View>
              <Icon
                name={'greater-than'}
                size={20}
                color={'blue'}
                style={{
                  alignSelf: 'center',
                  marginLeft: scale(50),
                  marginRight: scale(10),
                }}
              />
            </LinearGradient>
          </View>
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
    height: 200,
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
  },
  vecContainer: {
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    height: 100,
    marginTop: 90,
    marginBottom: 10,
    borderRadius: 15,
  },
  bell: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  backArrow: {
    position: 'absolute',
    top: 10,
    left: 15,
  },
  pageTitle: {
    position: 'absolute',
    top: 10,
    left: 55,
    fontSize: moderateScale(20),
    color: 'white',
    fontWeight: '500',
  },
  userImg: {
    height: 90,
    width: 90,
    borderRadius: 45,
    top: 30,
    left: 30,
  },
  camera: {
    borderColor: 'white',
    borderRadius: 45,
    borderWidth: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingTop: 5,
    height: 30,
    width: 30,
    top: 90,
  },
  details: {
    flexDirection: 'row',
  },
  user: {
    fontSize: moderateScale(20),
    fontWeight: '500',
    fontStyle: 'italic',
    color: 'black',
  },
  userContainer: {
    top: 30,
    left: 20,
  },
  number: {
    marginTop: 5,
    fontSize: moderateScale(11),
    fontWeight: '400',
    color: 'black',
  },
  edit: {
    right: 20,
    top: 20,
    position: 'absolute',
  },
  progress: {
    position: 'absolute',
    top: 140,
    width: '80%',
    alignSelf: 'center',
  },
  pb: {
    top: 70,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  cp: {
    fontSize: 11,
    position: 'absolute',
    color: 'black',
    left: '10%',
  },
  add: {
    position: 'absolute',
    fontSize: moderateScale(12),
    color: 'blue',
    fontWeight: '400',
    right: '10%',
  },
  vaccine: {
    backgroundColor: 'white',
    top: 80,
    height: 180,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  vdeatils: {
    flexDirection: 'row',
  },
  inject: {
    height: 60,
    width: 60,
    top: 10,
    left: 10,
  },
  vactext: {
    top: 20,
    left: 20,
    marginRight: '30%',
  },
  getVac: {
    fontSize: moderateScale(18),
    color: 'black',
    fontWeight: '600',
  },
  pass: {flexDirection: 'row', top: 30, left: '5%'},
  txt: {fontSize: moderateScale(13), color: 'black', left: scale(5)},
  border: {
    flexDirection: 'row',
    width: '45%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
  },
  rate: {
    height: 60,
    width: 60,
    top: 10,
    left: 10,
  },
  headertxt: {fontSize: moderateScale(16), fontWeight: '500', color: 'black'},
  disctxt: {fontSize: moderateScale(13), color: 'grey'},
  trbtxt: {
    color: 'black',
    fontWeight: '700',
    fontSize: moderateScale(17),
    left: 20,
    marginTop: 20,
  },
  trbdisc: {
    color: 'black',
    fontSize: moderateScale(13),
    left: 20,
    marginTop: 10,
  },
});
