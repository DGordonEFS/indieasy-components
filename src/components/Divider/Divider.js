import React from 'react';
import IndieasyComponent from 'components';
import * as themeIds from 'components/themes';

class Divider extends IndieasyComponent {
	render() {
		const style = this.createStyle(
			themeIds.DIVIDER,
			this.props,
			this.props.baseStyle
		);

		return <div style={style} />;
	}
}

export default Divider;
