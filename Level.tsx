import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface LevelProps {
  backgroundColor: string;
  level: number;
}

export class Level extends React.Component<LevelProps> {
  render() {
    const {backgroundColor} = this.props;
    return <View style={[styles.cell, {backgroundColor}]} />;
  }
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
  },
});
