import React from 'react';
import IndieasyComponent from 'components';
import { createFinalStyle } from 'theming';
import * as themeIds from 'components/themes';

class Divider extends IndieasyComponent {
	render() {
		const style = createFinalStyle(
			themeIds.DIVIDER,
			this.props,
			this.props.baseStyle
		);

		return <div style={style} />;
	}
}

export default Divider;
