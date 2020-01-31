import React from 'react';

import { addComponentTheme, createFinalStyle } from '../../theming/theme';

const defaultComponentTheme = '_Text';

addComponentTheme(defaultComponentTheme, {
	userSelect: 'none',
});

const Text = (props) => {
	const style = createFinalStyle(defaultComponentTheme, props);

	return (
		<span {...props} style={style}>
			{props.children}
		</span>
	);
};

export default Text;
