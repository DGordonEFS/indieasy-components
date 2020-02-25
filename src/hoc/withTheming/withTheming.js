import { connect } from 'react-redux';

const mapStateToProps = (state, ownerProps) => {
	return {
		css: state.theming.currentTheme
			? state.theming.currentTheme.getCss(ownerProps.cssId)
			: null,
	};
};

export default (component) => connect(mapStateToProps)(component);
