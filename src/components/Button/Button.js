import React from 'react';
import Radium from 'radium';

import { addComponentTheme, createFinalStyle } from 'theming/theme';

const defaultComponentTheme = '_button';

addComponentTheme(defaultComponentTheme, {
	backgroundColor: 'red',
	border: '1px solid black',
	color: 'white',
});

// Components are functions, and they must start with a capital letter
function Button(props) {
	const onClick = (e) => {
		if (props.onClick) props.onClick(e);
	};

	const style = createFinalStyle(defaultComponentTheme, props);

	return (
		<div onMouseUp={onClick} style={style}>
			{props.children}
		</div>
	);
}

// This export will be picked up in ./index.js
export default Radium(Button);
