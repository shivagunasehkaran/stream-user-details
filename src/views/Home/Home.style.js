import {StyleSheet} from 'react-native';

export const HomeStyles = (colourPalette: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 5,
    },
    flatListView: {
      backgroundColor: colourPalette.primary,
      marginVertical: 10,
    },
    loader: {
      marginTop: 10,
      alignItems: 'center',
    },
  });
