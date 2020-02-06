import React, { Component } from 'react';
import { themeComponent } from 'theming';

import Radium from 'radium';

import * as themeIds from 'components/themes';

class Panel extends Component {
	render() {
		const style = this.createStyle(
			themeIds.PANEL,
			this.props,
			this.props.baseStyle
		);

		return <div style={style}>{this.props.children}</div>;
	}
}

export default Radium(themeComponent(Panel));
