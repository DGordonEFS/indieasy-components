import React, { Component } from 'react';
import { withTheming } from '../../hoc/withTheming';

const defaultClassNames = {
  SCROLLPANE: 'scrollpane'
};

class ScrollPane extends Component {
  render() {
    const classNames = this.props.classNames || defaultClassNames;
    const style = { ...this.props.style, flexGrow: 1 };

    style.overflowX = this.props.scrollX ? 'auto' : 'hidden';
    style.overflowY = this.props.scrollY ? 'auto' : 'hidden';

    return (
      <div className={this.props.css[classNames.SCROLLPANE]} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default withTheming(ScrollPane);
