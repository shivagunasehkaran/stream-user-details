/**
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';

import OverLay from '../../components/OverLay/OverLay';
import UserDetails from '../../components/UserDetails/UserDetails';
import {useFetchUserAPI} from '../../services/Services';
import {styles} from './Home.style';

const Home = (): Node => {
  const [userData, setUserData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(20);
  const [individualUserItem, setIndividualUserItem] = useState([]);

  // Remember the latest callback.
  useEffect(() => {
    setIsLoading(true);
    getUserProfiles();
  }, [pageCurrent]);

  // call random user API
  async function getUserProfiles() {
    let data = await useFetchUserAPI(pageCurrent);
    // set user data
    setUserData(userData.concat(data));
    setIsLoading(false);
  }

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
        <ActivityIndicator size={'large'} />
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
