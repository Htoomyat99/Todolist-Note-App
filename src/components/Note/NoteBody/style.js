import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  emptyContainer: {
    // backgroundColor: 'red',
    width: wp(90),
    height: hp(52),
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertText: {
    // backgroundColor: 'pink',
    fontSize: wp(4),
    marginTop: hp(1),
  },
  container: {
    backgroundColor: '#ffb71c',
    width: wp(90),
    marginBottom: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: wp(2),
  },
  title: {
    letterSpacing: wp(0.1),
    fontSize: wp(4.5),
    fontWeight: 'bold',
    paddingTop: wp(1),
    marginLeft: wp(5),
    color: '#3D3D4E',
  },
  para: {
    letterSpacing: wp(0.1),
    marginLeft: wp(5),
    color: '#3D3D4E',
    paddingVertical: wp(1),
  },
  date: {
    fontSize: wp(3),
    paddingBottom: wp(2),
    marginLeft: wp(5),
  },
  icon: {
    marginRight: wp(3),
  },
});

export default styles;
