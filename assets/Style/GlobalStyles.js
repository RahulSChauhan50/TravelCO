import {Dimensions} from 'react-native';

let white = 'white';

const openSansBold = 'OpenSans-Bold';
const openSansRegular = 'OpenSans-Regular.ttf';
export default {
  background: 'white',
  white: white,
  transparent: 'transparent',
  darkBlue: '#00123d',
  fontDefault: openSansBold,
  fontLight: openSansRegular,
  lightBlue: '#37b7b8',
  black: 'black',
  red: '#ff8390',
  skyblue: '#82e8ff',
  yellow: '#ffe383',
  redDarkTwo: '#ff5252',
  // darkGrey: '#585a79',
  // darkerGrey: '#42435f',
  grey: '#d5d5d5',
  darkGrey: '#7f7f7f',
  slateGrey: '#3c4042',
  textSkin: '#f7eee8',
  lightSkin: '#fff1ea',
  darkSkin: '#ffe4d3',
  // lightGrey: '#7e778b',
  textHeader: {
    fontFamily: openSansBold,
    fontSize: 16,
  },
  greenDark: '#24adaf',
  greenLight: '#64cfce',
  greenMedium: '#3dbabb',
  greenDarkest: '#00838f',
  skyDark: '#3dc9ff',
  skyMedium: '#4fcfff',
  skyLight: '#82e2ff',
  yellowDark: '#fea825',
  yellowMedium: '#feb545',
  yellowLight: '#fdc877',
  redDark: '#e57373',
  redMedium: '#ef9a9a',
  redLight: '#ffcdd2',
  pinkLight: '#f8bbd0',
  pinkMedium: '#f48fb1',
  pinkDark: '#f06292',
  orangeDark: '#ff8a65',
  orangeMedium: '#ffab91',
  orangeLight: '#ffccbc',
  onboardingBlue: '#3dbabb', //'#303133',//'#0099ff',
  //#EBB0E7,#2642D3
  blueLinks: '#0099ff',
  cyanLight: '#e0f7fa',
  cyanMedium: '#b2ebf2',
  cyanDark: '#80deea',
  blueish: '#80b0ff',
  gold: '#D4AF37',
  silver: '#c0c0c0',
  bronze: '#cd7f32',
  slategray: '#303133',
  smoke: '#f7f7f7',
  top: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    borderRadius: 1,
    flexDirection: 'row',
    elevation: 5,
    height: Dimensions.get('screen').height * 0.1,
    zIndex: 100,
  },
  box: {
    borderRadius: 10,
    width: '95%',
    paddingVertical: 10,
    marginVertical: 10,
    alignSelf: 'center',
    height: 170,
    elevation: 10,
  },
};

export const font = {
  xxl: 34,
  xl: 28,
  medium: 18,
  header: 26,
  large: 22,
  size_16: 16,
  small: 14,
  x: 12,
  xs: 10,
  xxs: 8,
};