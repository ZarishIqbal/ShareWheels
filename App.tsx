/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme
} from 'react-native';
import "./global.css";

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GluestackUIProvider mode="light"><SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
       
      
        </ScrollView>
      </SafeAreaView>
      </GluestackUIProvider>
  );
}


export default App;
