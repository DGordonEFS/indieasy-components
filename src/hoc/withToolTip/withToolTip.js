import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		toolTip: state.tooltips.currentToolTip,
	};
};

export default (ToolTip) => connect(mapStateToProps)(ToolTip);
