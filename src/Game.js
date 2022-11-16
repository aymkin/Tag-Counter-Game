/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text as TextRN,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Text = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TextRN style={{color: isDarkMode ? Colors.white : Colors.black}}>
      {children}
    </TextRN>
  );
};

export const Game: () => Node = props => {
  useEffect(() => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      console.log('tag found', tag);
    });

    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, []);
  const scanTag = async () => {
    await NfcManager.registerTagEvent();
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={scanTag} style={[styles.btn]}>
        <Text>Scan a tag</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    margin: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
});
