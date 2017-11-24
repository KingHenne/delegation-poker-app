import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface LevelProps {
  backgroundColor: string;
  level: number;
  name: string;
  description: string;
}

export class Level extends React.Component<LevelProps> {
  render() {
    const {backgroundColor, level, name, description} = this.props;

    return (
      <View style={[styles.cell, {backgroundColor}]}>
        <Text style={styles.name}>
          {level}. {name}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    flex: 2,
    marginLeft: 10,
  },
});
