// react library imports
import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// style imports
import {UserDetailsStyles} from './UserDetails.style';
import {ThemeContext} from '../../provider/ThemeProvider';

type UserDetailsProp = {
  item: Object,
  index: number,
};

// flatlist render item
const UserDetails = (props: UserDetailsProp) => {
  // getting colors from ThemeContext
  const {colourPalette} = useContext(ThemeContext);
  const styles = UserDetailsStyles(colourPalette);
  // getting data from parent
  let item = props.item ? props.item : null;
  let iconUrl =
    item && item.picture && item.picture.thumbnail
      ? item.picture.thumbnail
      : null;
  let title = item && item.name ? item.name.title : '';
  let firstName = item && item.name ? item.name.first : '';
  let lastName = item && item.name ? item.name.last : '';
  let phone = item ? item.phone : '';
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => props.showPopup(item)}>
      <View style={styles.avatarView}>
        <Image source={{uri: iconUrl}} style={styles.avatar} />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.name}>{`${title} ${firstName} ${lastName}`}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserDetails;
