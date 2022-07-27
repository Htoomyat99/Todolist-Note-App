import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  emptyContainer: {
    // backgroundColor: 'red',
    width: wp(90),
    height: hp(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertText: {
    fontSize: wp(4),
    marginTop: hp(1),
  },
  container: {
    backgroundColor: '#90CAF9',
    width: wp(85),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: wp(1.8),
    marginBottom: hp(1),
  },
  title: {
    letterSpacing: wp(0.1),
    fontSize: wp(4.5),
    paddingVertical: wp(3),
    marginLeft: wp(5),
    color: '#3D3D4E',
    fontWeight: 'bold',
  },
  date: {
    marginLeft: wp(5),
    paddingVertical: wp(2),
  },
});

export default styles;
