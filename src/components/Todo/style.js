import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    // backgroundColor: '#ff8800',
    flex: 1,
    width: wp(90),
  },
  title: {
    // backgroundColor: 'pink',
    fontSize: wp(8),
    fontWeight: 'bold',
    letterSpacing: wp(0.1),
    color: '#3D3D4E',
  },
  text: {
    // backgroundColor: 'red',
    marginTop: hp(4),
    textAlign: 'center',
    fontSize: wp(4),
    letterSpacing: wp(0.1),
    paddingVertical: wp(0.5),
  },
  addIcon: {
    marginBottom: hp(5),
    marginLeft: wp(65),
  },
});

export default styles;
