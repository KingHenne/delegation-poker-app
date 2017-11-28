import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TouchableView} from './TouchableView';
import {DimensionProps, responsive} from './responsive';

export interface LevelProps {
  backgroundColor: string;
  highlightColor?: string;
  level: number;
  name: string;
  description: string;
  onPress(level: number): void;
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
    color: 'rgb(50, 50, 50)',
  },
  description: {
    marginLeft: 10,
    color: 'rgb(50, 50, 50)',
  },
});

export function Level({
  windowWidth,
  windowHeight,
  backgroundColor,
  highlightColor,
  level,
  name,
  description,
  onPress,
}: LevelProps & DimensionProps): JSX.Element {
  const descriptionStyle = {
    flex: windowWidth >= 480 ? 4 : windowWidth >= 560 ? 6 : 2,
    fontSize: windowHeight > 320 ? 14 : 13,
  };

  return (
    <TouchableView
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      onPress={() => onPress(level)}
    >
      <View style={styles.cell}>
        <Text style={styles.name}>
          {level + 1}. {name}
        </Text>
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      </View>
    </TouchableView>
  );
}

export const ResponsiveLevel = responsive(Level);
