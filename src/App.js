/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Game} from './Game';

export const App: () => Node = () => {
  const [hasNfc, setHasNFC] = useState(null);

  useEffect(() => {
    (async () => {
      const deviceIsSupported = await NfcManager.isSupported();
      setHasNFC(deviceIsSupported);
      if (deviceIsSupported) {
        await NfcManager.start();
        console.warn('NFC STARTED');
      }
    })();
  }, []);

  if (hasNfc === null) {
    return null;
  } else if (!hasNfc) {
    return (
      <View style={styles.wrapper}>
        <Text>Your device does not support NFC</Text>
      </View>
    );
  }

  return <Game />;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.black,
  },
});
