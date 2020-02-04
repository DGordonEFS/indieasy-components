import React from 'react';

import IndieasyComponent from 'components';
import { createFinalStyle } from 'theming/theme';
import * as themeIds from 'components/themes';

class ScrollPane extends IndieasyComponent {
	render() {
		const baseStyle = { flexGrow: 1 };

		if (this.props.scrollX) baseStyle.overflowX = 'scroll';
		if (this.props.scrollY) baseStyle.overflowY = 'scroll';

		const style = createFinalStyle(themeIds.SCROLL_PANE, this.props, baseStyle);
		return <div style={style}>{this.props.children}</div>;
	}
}

export default ScrollPane;
