import React, { Component } from 'react';

import { listen, unlisten } from 'theming';

class IndieasyComponent extends Component {
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
