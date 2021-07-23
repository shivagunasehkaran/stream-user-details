import {StyleSheet} from 'react-native';

export const UserDetailsStyles = (colourPalette: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 5,
      marginVertical: 5,
      backgroundColor: colourPalette.secondary,
      borderRadius: 8,
    },
    avatarView: {
      margin: 20,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    nameView: {
      flex: 1,
      justifyContent: 'center',
      borderTopEndRadius: 8,
      borderBottomEndRadius: 8,
    },
    name: {
      fontSize: 18,
      color: colourPalette.black
    },
    phone: {
      marginTop: 10,
    },
  });
