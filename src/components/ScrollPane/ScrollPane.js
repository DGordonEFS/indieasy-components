import React from 'react';

import { createFinalStyle } from 'theming/theme';
import * as themeIds from 'components/themes';

const ScrollPane = (props) => {
	const baseStyle = {};

	if (props.scrollX) baseStyle.overflowX = 'scroll';
	if (props.scrollY) baseStyle.overflowY = 'scroll';

	const style = createFinalStyle(themeIds.SCROLL_PANE, props, baseStyle);
	return <div style={style}>{props.children}</div>;
};

export default ScrollPane;
