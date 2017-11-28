import * as React from 'react';
import {Dimensions} from 'react-native';

export interface DimensionProps {
  windowWidth: number;
  windowHeight: number;
}

export interface UpdateOnDimensionsChangeProps<Props> {
  component: React.ComponentType<Props & DimensionProps>;
  componentProps: Props;
}

export class UpdateOnDimensionsChange<Props> extends React.Component<
  UpdateOnDimensionsChangeProps<Props>
> {
  private unmounted = false;

  public constructor(props: UpdateOnDimensionsChangeProps<Props>) {
    super(props);
    Dimensions.addEventListener('change', this.handleDimensionsChange);
  }

  public componentWillUnmount(): void {
    Dimensions.removeEventListener('change', this.handleDimensionsChange);
    this.unmounted = true;
  }

  public render(): JSX.Element {
    const {component: Component, componentProps} = this.props;
    const {width, height} = Dimensions.get('window');

    return (
      <Component
        {...componentProps}
        windowWidth={width}
        windowHeight={height}
      />
    );
  }

  private handleDimensionsChange = () => {
    if (!this.unmounted) {
      this.forceUpdate();
    }
  };
}

export function responsive<Props = {}>(
  Component: React.ComponentType<Props & DimensionProps>
): React.ComponentType<Props> {
  return (props: Props) => {
    const UpdateOnDimensionsChangeComponent = UpdateOnDimensionsChange as new (
      props: UpdateOnDimensionsChangeProps<Props>
    ) => UpdateOnDimensionsChange<Props>;

    return (
      <UpdateOnDimensionsChangeComponent
        component={Component}
        componentProps={props}
      />
    );
  };
}
