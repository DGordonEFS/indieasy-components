import React from 'react';

import { createFinalStyle } from '../../theming/theme';

import * as themeIds from 'components/themes';

const Text = (props) => {
	const style = createFinalStyle(themeIds.TEXT, props);

	return (
		<span {...props} style={style}>
			{props.children}
		</span>
	);
};

export default Text;
