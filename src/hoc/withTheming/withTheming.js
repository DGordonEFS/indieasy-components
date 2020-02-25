import React from 'react';
import { theming } from '@indieasy.software/indieasy-engine';

export default (Component) => {
	return (props) => {
		if (!props.cssId) return <Component {...props} />;
		const theme = theming.manager.getActiveTheme();
		const css = theme.getCss(props.cssId);
		return <Component {...props} css={css} />;
	};
};
