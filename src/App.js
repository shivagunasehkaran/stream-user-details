/**
 * @format
 * @flow strict-local
 */
// react library imports
import React from 'react';
import type {Node} from 'react';
// presentational component
import Home from '../src/views/Home';
// style imports
import ThemeProvider from '../src/provider/ThemeProvider';

const App = (): Node => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
