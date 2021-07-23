/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';

import OverLay from '../../components/OverLay/OverLay';
import UserDetails from '../../components/UserDetails/UserDetails';

import {useFetchRandomUserAPI} from '../../services/Services';
import {styles} from './Home.style';

const Home = (): Node => {
  const [userData, setUserData] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [pageCurrent, setpageCurrent] = useState(20);
  const [individualUserItem, setIndividualUserItem] = useState([]);

  // Remember the latest callback.
  useEffect(() => {
    setisLoading(true);
    callRandomAPI();
  }, [pageCurrent]);

  // call random user API
  async function callRandomAPI() {
    let data = await useFetchRandomUserAPI(pageCurrent);
    // set user data
    setUserData(userData.concat(data));
    setisLoading(false);
  }

  // show overlay
  const renderOverlay = item => {
    setisVisible(true);
    setIndividualUserItem(item);
  };

  // hide overlay
  const hideOverlay = () => {
    setisVisible(false);
  };

  // child render item
  const childListRenderItem = ({item, index}) => (
    <UserDetails item={item} renderOverlay={() => renderOverlay(item)} />
  );

  // child KeyExtractor
  const childListKeyExtractor = item => item.id;

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
    setpageCurrent(pageCurrent + 20);
    setisLoading(true);
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
            onHandle={() => hideOverlay()}
          />
        ) : null}
      </SafeAreaView>
    </View>
  );
};

export default Home;
