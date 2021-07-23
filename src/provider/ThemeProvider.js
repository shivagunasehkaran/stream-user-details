// react library imports
import React, {createContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
// style imports
import {ColourPalette} from '../assets/styles/ColourPalette';

export const ThemeContext = createContext();

const ThemeProvider = React.memo(({children}) => {
  const [theme, setTheme] = useState('light');

  useEffect(async () => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      // Use dark color scheme
      setTheme(colorScheme);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colourPalette:
          theme === 'dark' ? ColourPalette.dark : ColourPalette.light,
      }}>
      {children}
    </ThemeContext.Provider>
  );
});

export default ThemeProvider;
