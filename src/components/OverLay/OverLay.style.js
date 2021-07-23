import {Dimensions, StyleSheet} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColourPalette';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    zIndex: 1,
    justifyContent: 'center',
  },
  overlay: {
    marginLeft: 50,
    backgroundColor: ColourPalette.lightGrey,
    width: 300,
    height: 200,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: ColourPalette.black,
  },
  overlayTopItem: {
    flex: 2,
    backgroundColor: ColourPalette.darkGrey,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  overlayMiddleItem: {
    flex: 2,
    backgroundColor: ColourPalette.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  overlayBottomItem: {
    flex: 2,
    backgroundColor: ColourPalette.darkGrey,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
