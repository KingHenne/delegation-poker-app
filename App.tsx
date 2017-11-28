import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {ResponsiveCard} from './src/components/Card';
import {FadeView} from './src/components/FadeView';
import {ResponsiveHeader} from './src/components/Header';
import {Levels} from './src/components/Levels';
import {levels} from './src/levels';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(50, 50, 50)',
    justifyContent: 'center',
  },
  content: {
    flex: 7,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

// tslint:disable-next-line no-default-export
export default class App extends React.Component {
  public state = {selectedLevel: 0, showCard: false};

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <ResponsiveHeader />

        <View style={styles.content}>
          <Levels onLevelPress={this.handleLevelPress} />

          <FadeView style={styles.card} visible={this.state.showCard}>
            <ResponsiveCard
              level={this.state.selectedLevel}
              {...levels[this.state.selectedLevel]}
              onPress={this.handleCardPress}
            />
          </FadeView>
        </View>
      </View>
    );
  }

  private handleLevelPress = (selectedLevel: number): void => {
    this.setState({selectedLevel, showCard: true});
  };

  private handleCardPress = (): void => {
    this.setState({showCard: false});
  };
}
