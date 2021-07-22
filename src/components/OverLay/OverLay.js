import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import BGImage from '../../assets/img/blur.png';
import {styles} from './OverLay.style';

type OverlayProp = {
  users: string,
};

const OverLay = (props: OverlayProp) => {
  return (
    <ImageBackground style={styles.container} source={BGImage} blurRadius={25}>
      <TouchableOpacity onPress={() => props.onHandle()}>
        <View style={styles.overlay}>
          <View style={styles.overlayTopItem}>
            <Text>{'Email'}</Text>
          </View>
          <View style={styles.overlayMiddleItem}>
            <Text>{'City'}</Text>
          </View>
          <View style={styles.overlayMiddleItem}>
            <Text>{'Date of Birth'}</Text>
          </View>
          <View style={styles.overlayBottomItem}>
            <Text>{'Gender'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default OverLay;
