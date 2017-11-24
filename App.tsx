import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {Header} from './Header';
import {Level} from './Level';

const levels = [
  {
    level: 1,
    backgroundColor: 'rgb(255, 215, 220)',
    name: 'Tell',
    description:
      'Make the decision. You might explain your motivation. No discussion.',
  },
  {
    level: 2,
    backgroundColor: 'rgb(254, 228, 209)',
    name: 'Sell',
    description:
      'Make the decision. Try to convince others and help them feel involved.',
  },
  {
    level: 3,
    backgroundColor: 'rgb(245, 243, 206)',
    name: 'Consult',
    description: 'Ask for input, take input into considaration, then decide.',
  },
  {
    level: 4,
    backgroundColor: 'rgb(231, 253, 211)',
    name: 'Agree',
    description: 'Discuss until you reach consensus.',
  },
  {
    level: 5,
    backgroundColor: 'rgb(211, 253, 231)',
    name: 'Advise',
    description: 'Offer input, let others decide.',
  },
  {
    level: 6,
    backgroundColor: 'rgb(206, 243, 245)',
    name: 'Inquire',
    description:
      'Leave decision to others, then ask them to convince/inform you. It’s their decision.',
  },
  {
    level: 7,
    backgroundColor: 'rgb(209, 229, 254)',
    name: 'Delegate',
    description:
      'Leave decision completely to others. Don’t want to know anything about it.',
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <Header />

        {levels.map(({level, backgroundColor, name, description}) => (
          <Level
            key={level}
            level={level}
            backgroundColor={backgroundColor}
            name={name}
            description={description}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(50, 50, 50)',
    justifyContent: 'center',
  },
});
