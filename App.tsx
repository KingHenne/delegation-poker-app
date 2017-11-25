import * as React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';

import {Card} from './Card';
import {Header} from './Header';
import {Level} from './Level';

interface LevelInfo {
  backgroundColor: string;
  highlightColor?: string;
  name: string;
  description: string;
}

const levels: LevelInfo[] = [
  {
    backgroundColor: 'hsl(353, 100%, 92%)',
    highlightColor: 'hsl(353, 100%, 82%)',
    name: 'Tell',
    description:
      'Make the decision. You might explain your motivation. No discussion.',
  },
  {
    backgroundColor: 'hsl(25, 96%, 91%)',
    highlightColor: 'hsl(25, 96%, 81%)',
    name: 'Sell',
    description:
      'Make the decision. Try to convince others and help them feel involved.',
  },
  {
    backgroundColor: 'hsl(57, 66%, 88%)',
    highlightColor: 'hsl(57, 66%, 78%)',
    name: 'Consult',
    description: 'Ask for input, take input into considaration, then decide.',
  },
  {
    backgroundColor: 'hsl(91, 91%, 91%)',
    highlightColor: 'hsl(91, 91%, 81%)',
    name: 'Agree',
    description: 'Discuss until you reach consensus.',
  },
  {
    backgroundColor: 'hsl(149, 91%, 91%)',
    highlightColor: 'hsl(149, 91%, 81%)',
    name: 'Advise',
    description: 'Offer input, let others decide.',
  },
  {
    backgroundColor: 'hsl(183, 66%, 88%)',
    highlightColor: 'hsl(183, 66%, 78%)',
    name: 'Inquire',
    description:
      'Leave decision to others, then ask them to convince/inform you. It’s their decision.',
  },
  {
    backgroundColor: 'hsl(213, 96%, 91%)',
    highlightColor: 'hsl(213, 96%, 81%)',
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
          levels.map(
            ({backgroundColor, highlightColor, name, description}, level) => (
              <Level
                key={level}
                level={level}
                backgroundColor={backgroundColor}
                highlightColor={highlightColor}
                name={name}
                description={description}
                onPress={selectedLevel => this.setState({selectedLevel})}
              />
            )
          )
        )}
      </View>
    );
  }
}
