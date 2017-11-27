import * as React from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';

export interface FadeViewProps {
  visible: boolean;
  style?: StyleProp<ViewStyle>;
}

interface FadeViewState {
  renderChildren: boolean;
}

export class FadeView extends React.Component<FadeViewProps, FadeViewState> {
  public state = {
    renderChildren: this.props.visible,
  };

  private visibilityValue = new Animated.Value(this.props.visible ? 1 : 0);

  public componentWillReceiveProps({visible}: FadeViewProps): void {
    if (visible) {
      this.setState({renderChildren: true});
    }

    Animated.timing(this.visibilityValue, {
      toValue: visible ? 1 : 0,
      duration: 150,
    }).start(() => {
      this.setState({renderChildren: visible});
    });
  }

  public render(): JSX.Element {
    const {children, style} = this.props;
    const fadeStyle = {
      opacity: this.visibilityValue,
      transform: [{scale: this.visibilityValue}],
    };

    return (
      <Animated.View style={[style, fadeStyle]} pointerEvents="box-none">
        {this.state.renderChildren ? children : null}
      </Animated.View>
    );
  }
}
