import * as React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';

import {Card} from './src/components/Card';
import {Header} from './src/components/Header';
import {Level} from './src/components/Level';
import {levels} from './src/levels';

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
