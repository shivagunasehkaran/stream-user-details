/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import UserDetails from '../../components/UserDetails/UserDetails';
import {useFetchRandomUserAPI} from '../../services/Services';
import {styles} from './Home.style';

const Home = (): Node => {
  const [userData, setUserData] = useState([]);

  // Remember the latest callback.
  useEffect(() => {
    callRandomAPI();
  }, []);

  // call random user API
  async function callRandomAPI() {
    let data = await useFetchRandomUserAPI(5);
    // set user data
    setUserData(data);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.flatListView}>
          <FlatList
            data={userData}
            renderItem={({item, index}) => (
              <UserDetails
                item={item}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
