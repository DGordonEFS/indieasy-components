import React from 'react';
import { addComponentTheme, createFinalStyle } from 'theming/theme';

import List from 'components/list';

addComponentTheme('toolbar', {
	backgroundColor: '#363636',
	padding: '2px',
	paddingLeft: '5px',
	width: '100%',
	height: '2rem',
});

addComponentTheme('toolbar-item', {
	backgroundColor: '#363636',
	color: 'white',
	marginRight: '10px',
	fontSize: '1.2rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
});

const Toolbar = (props) => {
	const list = (
		<List
			horizontal
			theme="toolbar"
			itemProps={{ theme: 'toolbar-item' }}
			{...props}
		/>
	);

	return list;
};

export default Toolbar;
