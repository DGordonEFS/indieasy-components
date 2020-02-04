import React from 'react';

import IndieasyComponent from 'components';
import List from 'components/List';

import * as themeIds from 'components/themes';

class Toolbar extends IndieasyComponent {
	render() {
		const list = (
			<List
				horizontal
				theme={themeIds.TOOL_BAR}
				itemProps={{ theme: themeIds.TOOL_BAR_ITEM }}
				{...this.props}
			/>
		);

		return list;
	}
}

export default Toolbar;
