import React from 'react';
import Radium from 'radium';

import { createFinalStyle } from 'theming/theme';

import * as themeIds from 'components/themes';

// Components are functions, and they must start with a capital letter
function Button(props) {
	const onMouseUp = (e) => {
		if (props.onClick) props.onClick(e);
		if (props.onMouseUp) props.onMouseUp(e);
	};
	const onEnter = (e) => {
		if (props.onMouseEnter) props.onMouseEnter(e);
	};
	const onLeave = (e) => {
		if (props.onMouseLeave) props.onMouseLeave(e);
	};

	const style = createFinalStyle(themeIds.BUTTON, props, props.baseStyle);

	if (props.pointer) style.cursor = 'pointer';

	return (
		<div
			onMouseUp={onMouseUp}
			onMouseEnter={onEnter}
			onMouseLeave={onLeave}
			style={style}
		>
			{props.children}
		</div>
	);
}

// This export will be picked up in ./index.js
export default Radium(Button);
