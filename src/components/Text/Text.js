import React from 'react';

import { IndieasyComponent } from 'components';

import * as themeIds from 'components/themes';

class Text extends IndieasyComponent {
	render() {
		const style = this.createStyle(themeIds.TEXT, this.props);

		return (
			<span {...this.props} style={style}>
				{this.props.children}
			</span>
		);
	}
}

export default Text;
