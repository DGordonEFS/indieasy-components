import React from 'react';
import Radium from 'radium';

import IndieasyComponent from 'components';
import { createFinalStyle } from 'theming/theme';
import * as themeIds from 'components/themes';

class Panel extends IndieasyComponent {
	render() {
		const style = createFinalStyle(
			themeIds.PANEL,
			this.props,
			this.props.baseStyle
		);

		return <div style={style}>{this.props.children}</div>;
	}
}

export default Radium(Panel);
