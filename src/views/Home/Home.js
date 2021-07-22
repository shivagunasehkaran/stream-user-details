/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
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
        <Text>{'Hi Shiva'}</Text>
      </SafeAreaView>
    </View>
  );
};

export default Home;
