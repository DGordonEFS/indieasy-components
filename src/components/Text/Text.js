import React, { Component } from 'react';
import { themeComponent } from 'theming';

import * as themeIds from 'components/themes';

class Text extends Component {
	render() {
		const style = this.createStyle(themeIds.TEXT, this.props);

		return (
			<span {...this.props} style={style}>
				{this.props.children}
			</span>
		);
	}
}

export default themeComponent(Text);
