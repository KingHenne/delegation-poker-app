import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export interface CardProps {
  backgroundColor: string;
  level: number;
  name: string;
  description: string;
  onPress(): void;
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
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

export class Card extends React.Component<CardProps> {
  public render(): JSX.Element {
    const {backgroundColor, level, name, description, onPress} = this.props;
    const {height} = Dimensions.get('window');
    const levelAndNameStyle = {flex: height > 320 ? 2 : 3};

    return (
      <TouchableHighlight style={styles.container} onPress={onPress}>
        <View style={[styles.content, {backgroundColor}]}>
          <View style={[styles.levelAndName, levelAndNameStyle]}>
            <Text style={styles.level}>{level + 1}</Text>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
