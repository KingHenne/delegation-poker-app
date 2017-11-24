import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Delegation Poker</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'rgb(50, 50, 50)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 22,
  },
});
