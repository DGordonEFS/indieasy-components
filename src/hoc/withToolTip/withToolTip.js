import { connect } from 'react-redux';
import { store } from '@indieasy.software/indieasy-engine';

const mapStateToProps = (state) => {
	return {
		toolTip: store.getStore().getState().tooltips.currentToolTip,
	};
};

export default (ToolTip) => connect(mapStateToProps)(ToolTip);
