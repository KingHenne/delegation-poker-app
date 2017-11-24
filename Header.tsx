import * as React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export class Header extends React.Component {
  render() {
    const {height} = Dimensions.get('window');
    const flex = height > 320 ? 1 : 1.5;
    const fontSize = height > 320 ? 22 : 15;

    return (
      <View style={[styles.header, {flex}]}>
        <Text style={[styles.title, {fontSize}]}>Delegation Poker</Text>
      </View>
    );
  }
}

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
