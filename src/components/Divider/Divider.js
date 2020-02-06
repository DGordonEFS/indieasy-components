import React, { Component } from 'react';
import { themeComponent } from 'theming';
import * as themeIds from 'components/themes';

class Divider extends Component {
	render() {
		const style = this.createStyle(
			themeIds.DIVIDER,
			this.props,
			this.props.baseStyle
		);

		return <div style={style} />;
	}
}

export default themeComponent(Divider);
