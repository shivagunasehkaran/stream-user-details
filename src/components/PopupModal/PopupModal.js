// react library imports
import React, {useContext, memo} from 'react';
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// style & image imports
import {PopupStyles} from './PopupModal.style';
import {ThemeContext} from '../../provider/ThemeProvider';
import * as Images from '../../assets/styles/Images';
// utills imports
import {formatDateToDisplayDate} from '../../utills/utills';

type PopupModalProp = {
  email: string,
  city: string,
  dateOfBirth: string,
  gender: string,
};

const PopupModal = (props: PopupModalProp) => {
  // getting colors from ThemeContext
  const {colourPalette} = useContext(ThemeContext);
  const styles = PopupStyles(colourPalette);
  // getting data from parent
  const {email, gender} = props.individualUserItem
    ? props.individualUserItem
    : null;
  const city =
    props.individualUserItem &&
    props.individualUserItem.location &&
    props.individualUserItem.location.city
      ? props.individualUserItem.location.city
      : null;
  const dateOfBirth =
    props.individualUserItem &&
    props.individualUserItem.dob &&
    props.individualUserItem.dob.date
      ? props.individualUserItem.dob.date
      : null;
  return (
    <TouchableWithoutFeedback onPress={() => props.onHandle()}>
      <ImageBackground
        style={styles.container}
        source={Images.Images.blurBG}
        blurRadius={25}>
        <View style={styles.popupModal}>
          <View style={styles.popupModalTopItem}>
            <Text>{email}</Text>
          </View>
          <View style={styles.popupModalMiddleItem}>
            <Text>{city}</Text>
          </View>
          <View style={styles.popupModalMiddleItem}>
            <Text>{formatDateToDisplayDate(dateOfBirth)}</Text>
          </View>
          <View style={styles.popupModalBottomItem}>
            <Text>{gender}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default memo(PopupModal);
