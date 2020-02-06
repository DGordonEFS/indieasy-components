import React, { Component } from 'react';

import { createFinalStyle, listen, unlisten } from 'theming';

class IndieasyComponent extends Component {
	createStyle = (defaultTheme, props, baseStyle) => {
		return createFinalStyle(defaultTheme, props, baseStyle);
	};

	callForceUpdate = () => {
		this.forceUpdate();
	};

	componentDidMount() {
		listen(this.callForceUpdate);
	}

	componentWillUnmount() {
		unlisten(this.callForceUpdate);
	}
}

export default IndieasyComponent;
