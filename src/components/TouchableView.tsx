import * as React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';

export interface TouchableViewProps {
  backgroundColor: string;
  highlightColor?: string;
  children: React.ReactChild;
  style?: StyleProp<ViewStyle>;
  onPress(event: GestureResponderEvent): void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export class TouchableView extends React.Component<TouchableViewProps> {
  public render(): JSX.Element {
    const {
      backgroundColor,
      highlightColor,
      children,
      onPress,
      style,
    } = this.props;

    return (
      <TouchableHighlight
        style={[styles.container, {backgroundColor}, style]}
        underlayColor={highlightColor || backgroundColor}
        activeOpacity={0.95}
        onPress={onPress}
      >
        {children}
      </TouchableHighlight>
    );
  }
}
