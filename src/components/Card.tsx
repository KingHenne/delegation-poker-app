import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TouchableView} from './TouchableView';
import {DimensionProps, responsive} from './responsive';

export interface CardProps {
  backgroundColor: string;
  highlightColor?: string;
  level: number;
  name: string;
  description: string;
  onPress(): void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  levelAndName: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  level: {
    fontWeight: 'bold',
    fontSize: 120,
    lineHeight: 120,
    color: 'rgb(50, 50, 50)',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 36,
    color: 'rgb(50, 50, 50)',
  },
  descriptionView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  description: {
    fontSize: 16,
    color: 'rgb(50, 50, 50)',
  },
});

export function Card({
  windowHeight,
  backgroundColor,
  highlightColor,
  level,
  name,
  description,
  onPress,
}: CardProps & DimensionProps): JSX.Element {
  const levelAndNameStyle = {flex: windowHeight > 320 ? 2 : 3};

  return (
    <TouchableView
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.content}>
        <View style={[styles.levelAndName, levelAndNameStyle]}>
          <Text style={styles.level}>{level + 1}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableView>
  );
}

export const ResponsiveCard = responsive(Card);
