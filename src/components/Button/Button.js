import React, { Component } from 'react';
import Radium from 'radium';

import { themeComponent } from 'theming';

import * as themeIds from 'components/themes';

// Components are functions, and they must start with a capital letter
class Button extends Component {
	test = () => {
		return 'hello';
	};
	render() {
		const onMouseUp = (e) => {
			if (this.props.onClick) this.props.onClick(e);
			if (this.props.onMouseUp) this.props.onMouseUp(e);
		};
		const onEnter = (e) => {
			if (this.props.onMouseEnter) this.props.onMouseEnter(e);
		};
		const onLeave = (e) => {
			if (this.props.onMouseLeave) this.props.onMouseLeave(e);
		};

		const style = this.createStyle(
			themeIds.BUTTON,
			this.props,
			this.props.baseStyle
		);

		if (this.props.pointer) style.cursor = 'pointer';

		return (
			<div
				onMouseUp={onMouseUp}
				onMouseEnter={onEnter}
				onMouseLeave={onLeave}
				style={style}
			>
				{this.props.children}
			</div>
		);
	}
}

// This export will be picked up in ./index.js
export default Radium(themeComponent(Button));
