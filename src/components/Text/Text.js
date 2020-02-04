import React from 'react';

import IndieasyComponent from 'components';
import { createFinalStyle } from '../../theming/theme';

import * as themeIds from 'components/themes';

class Text extends IndieasyComponent {
	render() {
		const style = createFinalStyle(themeIds.TEXT, this.props);

		return (
			<span {...this.props} style={style}>
				{this.props.children}
			</span>
		);
	}
}

export default Text;
