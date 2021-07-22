/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './Home.style';

type Props = {
  str: string,
};

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text>{'Hi Shiva'}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
