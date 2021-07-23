/**
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState, useContext} from 'react';
import type {Node} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';

import OverLay from '../../components/OverLay/OverLay';
import UserDetails from '../../components/UserDetails/UserDetails';
import {useFetchUserAPI} from '../../services/Services';

import {HomeStyles} from './Home.style';
import {ThemeContext} from '../../provider/ThemeProvider';
import {ColourPalette} from '../../assets/styles/ColourPalette';

const Home = (): Node => {
  const [userData, setUserData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(20);
  const [individualUserItem, setIndividualUserItem] = useState([]);
  const {colourPalette} = useContext(ThemeContext);
  const styles = HomeStyles(colourPalette);

  // Remember the latest callback.
  useEffect(() => {
    setIsLoading(true);
    getUserProfiles();
  }, [pageCurrent]);

  // call random user API
  async function getUserProfiles() {
    let data = await useFetchUserAPI(pageCurrent);
    getLast20Item(data);
    setIsLoading(false);
  }

  // get last 20 items from array & set data into new list
  const getLast20Item = data => {
    let newItem = data.slice(data.length - 20);
    // set user data
    setUserData(userData.concat(newItem));
  };

  // show overlay
  const showPopup = item => {
    setIsVisible(true);
    setIndividualUserItem(item);
  };

  // child render item
  const childListRenderItem = ({item, index}) => (
    <UserDetails item={item} showPopup={() => showPopup(item)} />
  );

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  // child render footer
  const childRenderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={ColourPalette.darkGrey} />
      </View>
    ) : null;
  };

  // handle pagination
  const handleLoadMore = () => {
    setPageCurrent(pageCurrent + 20);
    setIsLoading(true);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.flatListView}>
          <FlatList
            data={userData}
            renderItem={childListRenderItem}
            keyExtractor={childListKeyExtractor}
            ListFooterComponent={childRenderFooter}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
          />
        </View>
        {isVisible ? (
          <OverLay
            individualUserItem={individualUserItem}
            onHandle={() => setIsVisible(false)}
          />
        ) : null}
      </SafeAreaView>
    </View>
  );
};

export default Home;
