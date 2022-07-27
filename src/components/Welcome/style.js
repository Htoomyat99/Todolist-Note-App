import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    width: wp(90),
  },
  titleContainer: {
    // backgroundColor: '#ff8800',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: hp(4),
  },
  iconText: {
    fontSize: wp(4.3),
    fontWeight: 'bold',
    color: '#F4A600',
    marginLeft: wp(2),
    letterSpacing: wp(0.1),
  },
  text: {
    fontSize: wp(10.5),
    fontWeight: 'bold',
    marginTop: hp(2),
    lineHeight: hp(7.5),
    color: '#3D3D4E',
    fontFamily: 'Courgette-Regular.ttf',
  },
  simp: {
    color: '#F4A600',
  },
  image: {
    width: wp(90),
    resizeMode: 'contain',
    height: hp(45),
    marginTop: wp(-5),
  },
  para: {
    fontSize: wp(3.6),
    letterSpacing: wp(0.1),
    color: '#3D3D4E',
    marginTop: hp(2),
    lineHeight: hp(2.5),
  },
  footer: {
    backgroundColor: '#F4A600',
    marginTop: hp(5),
    borderRadius: hp(5),
  },
  footerText: {
    alignSelf: 'center',
    paddingVertical: hp(2),
    fontSize: wp(4),
    letterSpacing: wp(0.1),
    fontWeight: '500',
    color: '#fff',
  },
});

export default styles;
