import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const PopupStyles = (colourPalette: any) =>
  StyleSheet.create({
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
    popupModal: {
      marginLeft: 50,
      backgroundColor: colourPalette.lightGrey,
      width: 300,
      height: 200,
      borderRadius: 10,
      borderWidth: 0.2,
      borderColor: colourPalette.black,
    },
    popupModalTopItem: {
      flex: 2,
      backgroundColor: colourPalette.darkGrey,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 0.5,
    },
    popupModalMiddleItem: {
      flex: 2,
      backgroundColor: colourPalette.darkGrey,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 0.5,
    },
    popupModalBottomItem: {
      flex: 2,
      backgroundColor: colourPalette.darkGrey,
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
