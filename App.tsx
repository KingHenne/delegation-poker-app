import * as React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';

import {Card} from './Card';
import {Header} from './Header';
import {Level} from './Level';

const levels = [
  {
    backgroundColor: 'rgb(255, 215, 220)',
    name: 'Tell',
    description:
      'Make the decision. You might explain your motivation. No discussion.',
  },
  {
    backgroundColor: 'rgb(254, 228, 209)',
    name: 'Sell',
    description:
      'Make the decision. Try to convince others and help them feel involved.',
  },
  {
    backgroundColor: 'rgb(245, 243, 206)',
    name: 'Consult',
    description: 'Ask for input, take input into considaration, then decide.',
  },
  {
    backgroundColor: 'rgb(231, 253, 211)',
    name: 'Agree',
    description: 'Discuss until you reach consensus.',
  },
  {
    backgroundColor: 'rgb(211, 253, 231)',
    name: 'Advise',
    description: 'Offer input, let others decide.',
  },
  {
    backgroundColor: 'rgb(206, 243, 245)',
    name: 'Inquire',
    description:
      'Leave decision to others, then ask them to convince/inform you. It’s their decision.',
  },
  {
    backgroundColor: 'rgb(209, 229, 254)',
    name: 'Delegate',
    description:
      'Leave decision completely to others. Don’t want to know anything about it.',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(50, 50, 50)',
    justifyContent: 'center',
  },
});

// tslint:disable-next-line no-default-export
export default class App extends React.Component {
  public state = {selectedLevel: -1};

  public constructor(props: {}) {
    super(props);
    Dimensions.addEventListener('change', () => this.forceUpdate());
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <Header />

        {this.state.selectedLevel >= 0 ? (
          <Card
            level={this.state.selectedLevel}
            {...levels[this.state.selectedLevel]}
            onPress={() => this.setState({selectedLevel: -1})}
          />
        ) : (
          levels.map(({backgroundColor, name, description}, level) => (
            <Level
              key={level}
              level={level}
              backgroundColor={backgroundColor}
              name={name}
              description={description}
              onPress={selectedLevel => this.setState({selectedLevel})}
            />
          ))
        )}
      </View>
    );
  }
}
