import React from 'react';
import Radium from 'radium';

import ThemeManager, { Theme, ComponentTheme } from '../../theming';

const theme = ThemeManager.getCurrentTheme();
const defaultComponentTheme = '_button';
const componentTheme = new ComponentTheme(defaultComponentTheme);
componentTheme.value = {
	backgroundColor: 'red',
	border: '1px solid red',
};
theme.addComponent(componentTheme);

// Components are functions, and they must start with a capital letter
function Button(props) {
	const componentThemeId = props.theme || defaultComponentTheme;

	const theme = ThemeManager.getCurrentTheme();
	const componentTheme = theme.getComponent(componentThemeId);

	const onClick = (e) => {
		if (props.onClick) props.onClick(e);
	};

	return (
		<div onMouseUp={onClick} style={componentTheme.value}>
			{props.children}
		</div>
	);
}

// This export will be picked up in ./index.js
export default Radium(Button);
