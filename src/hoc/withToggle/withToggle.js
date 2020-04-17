import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    initialSelected: false,
    selected: false
  };

  static getDerivedStateFromProps = (props, state) => {
    let newState = state;

    if (
      props.initialSelected !== undefined &&
      props.initialSelected !== state.initialSelected
    ) {
      Object.assign(newState, { initialSelected: props.initialSelected });
    }

    if (props.selected !== undefined && props.selected !== state.selected) {
      Object.assign(newState, { selected: props.selected });
    }

    return newState;
  };

  mouseUpHandler = ev => {
    if (this.props.selected !== undefined)
    {
      if (this.props.onToggle) this.props.onToggle(!this.state.selected);
    }
    else
    {
      this.setState(prevState => {
        const selected = !prevState.selected;
        if (this.props.onToggle) this.props.onToggle(selected);
        return { selected: selected };
      });
    }
  };

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      ...this.props,
      selected: this.state.selected,
      onMouseUp: this.mouseUpHandler
    });
  }
}

export default Component => {
  return props => {
    return (
      <Toggle {...props}>
        <Component />
      </Toggle>
    );
  };
};
