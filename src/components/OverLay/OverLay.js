import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './OverLay.style';
import * as Images from '../../assets/styles/Images';
import {formatDateToDisplayDate} from '../../utills/utills';

type OverlayProp = {
  email: string,
  city: string,
  dateOfBirth: string,
  gender: string,
};

const OverLay = (props: OverlayProp) => {
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
    props.individualUserItem.location.date
      ? props.individualUserItem.location.date
      : null;
  return (
    <ImageBackground
      style={styles.container}
      source={Images.Images.blurBG}
      blurRadius={25}>
      <TouchableOpacity onPress={() => props.onHandle()}>
        <View style={styles.overlay}>
          <View style={styles.overlayTopItem}>
            <Text>{email}</Text>
          </View>
          <View style={styles.overlayMiddleItem}>
            <Text>{city}</Text>
          </View>
          <View style={styles.overlayMiddleItem}>
            <Text>{formatDateToDisplayDate(dateOfBirth)}</Text>
          </View>
          <View style={styles.overlayBottomItem}>
            <Text>{gender}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default OverLay;
