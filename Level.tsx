import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface LevelProps {
  backgroundColor: string;
  level: number;
  name: string;
  description: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    marginLeft: 10,
  },
});

export class Level extends React.Component<LevelProps> {
  public render(): JSX.Element {
    const {backgroundColor, level, name, description} = this.props;
    const {height, width} = Dimensions.get('window');
    const descriptionStyle = {
      flex: width >= 480 ? 4 : width >= 560 ? 6 : 2,
      fontSize: height > 320 ? 14 : 13,
    };

    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.7}>
        <View style={[styles.cell, {backgroundColor}]}>
          <Text style={styles.name}>
            {level}. {name}
          </Text>
          <Text style={[styles.description, descriptionStyle]}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
