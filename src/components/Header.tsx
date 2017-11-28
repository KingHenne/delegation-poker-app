import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {DimensionProps, responsive} from './responsive';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(50, 50, 50)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    marginTop: 15,
    fontWeight: 'bold',
  },
});

export function Header({windowHeight}: DimensionProps): JSX.Element {
  const flex = windowHeight > 320 ? 1 : 1.5;
  const fontSize = windowHeight > 320 ? 22 : 15;

  return (
    <View style={[styles.header, {flex}]}>
      <Text style={[styles.title, {fontSize}]}>Delegation Poker</Text>
    </View>
  );
}

export const ResponsiveHeader = responsive<{}>(Header);
