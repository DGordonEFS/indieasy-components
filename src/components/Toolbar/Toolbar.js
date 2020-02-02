import React from 'react';

import List from 'components/list';

import * as themeIds from 'components/themes';

const Toolbar = (props) => {
	const list = (
		<List
			horizontal
			theme={themeIds.TOOL_BAR}
			itemProps={{ theme: themeIds.TOOL_BAR_ITEM }}
			{...props}
		/>
	);

	return list;
};

export default Toolbar;
