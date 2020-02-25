import { connect } from 'react-redux';

const mapStateToProps = (state, ownerProps) => {
	if (ownerProps.cssId) {
		return {
			css: state.theming.currentTheme
				? state.theming.currentTheme.getCss(ownerProps.cssId)
				: null,
		};
	}
	return {};
};

export default (component) => connect(mapStateToProps)(component);
