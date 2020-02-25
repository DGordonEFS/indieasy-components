import React, { Component } from 'react';

class SelectIndex extends Component {
  state = {
    initialSelectedIndex: -1,
    selectedIndex: -1,
    enterIndex: -1,
    data: null,
    modifiedData: null
  };

  static getDerivedStateFromProps = (props, state) => {
    let newState = state;
    if (
      props.initialSelectedIndex !== undefined &&
      props.initialSelectedIndex !== state.initialSelectedIndex
    ) {
      Object.assign(newState, {
        initialSelectedIndex: props.initialSelectedIndex,
        selectedIndex: props.initialSelectedIndex
      });
    }
    if (props.selectedIndex !== undefined) {
      Object.assign(newState, { selectedIndex: props.selectedIndex });
    }
    if (props.enteredIndex !== undefined) {
      Object.assign(newState, { enterIndex: props.enteredIndex });
    }
    if (props.data !== state.data) {
      Object.assign(newState, { data: props.data, modifiedData: props.data });
    }

    return newState;
  };

  selectIndexHandler = index => {
    if (this.props.selectIndexConfig.ignore.selectIndex) return;
    if (this.props.onSelectIndex) this.props.onSelectIndex(index);
    this.setState({ selectedIndex: index });
  };

  enterIndexHandler = index => {
    if (this.props.selectIndexConfig.ignore.enterIndex) return;
    if (
      !this.props.selectIndexConfig.allowDuplicateEnter &&
      this.state.enterIndex === index
    )
      return;

    if (this.props.onEnterIndex) this.props.onEnterIndex(index);
    this.setState({ enterIndex: index });
  };

  leaveIndexHandler = index => {
    if (this.props.selectIndexConfig.ignore.leaveIndex) return;
    if (this.state.enterIndex !== index) return;

    if (this.props.onLeaveIndex) this.props.onLeaveIndex(index);
    this.setState({ enterIndex: -1 });
  };

  modifyDataHandler = data => {
    if (this.props.selectIndexConfig.ignore.modifyData) return;
    if (this.props.onModifyData) this.props.onModifyData(data);
    this.setState({ modifiedData: data });
  };

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      ...this.props,
      selectedIndex: this.state.selectedIndex,
      onSelectIndex: this.selectIndexHandler,
      enteredIndex: this.state.enterIndex,
      onEnterIndex: this.enterIndexHandler,
      onLeaveIndex: this.leaveIndexHandler,
      data: this.state.modifiedData,
      onModifyData: this.modifyDataHandler
    });
  }
}

export default (Component, config = { ignore: {} }) => {
  if (!config.ignore) config.ignore = {};
  return props => {
    if (props.withSelectIndex !== undefined && !props.withSelectIndex)
      return <Component {...props} />;

    return (
      <SelectIndex {...props} selectIndexConfig={config}>
        <Component />
      </SelectIndex>
    );
  };
};
