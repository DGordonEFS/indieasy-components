import React, { Component } from 'react';

import { withTheming } from '../../hoc/withTheming';
import { withSelectIndex } from '../../hoc/withSelectIndex';

import MenuPopup from '../MenuPopup';

export const defaultClassNames = {
	DROPDOWN: 'dropdown',
	POPUP: 'popup',
	HEADER: 'dropdown-header',
	TEXT: 'dropdown-text',
	ARROW: 'dropdown-arrow',
};

class DropDown extends Component {
	state = { open: false };

	clickHandler = () => {
		this.setState((prevState) => {
			const open = !prevState.open;

			if (open) {
				document.removeEventListener('mouseup', this.closeHandler);
				document.addEventListener('mouseup', this.closeHandler);
				if (this.props.onOpen) this.props.onOpen();
			} else {
				document.removeEventListener('mouseup', this.closeHandler);
				if (this.props.onClose) this.props.onClose();
			}

			return { open: !prevState.open };
		});
	};

	selectItemHandler = (item) => {
		const index = this.props.data.findIndex((x) => x === item);

		this.setState({ open: false });

		if (this.props.onSelectIndex) this.props.onSelectIndex(index);
		if (this.props.onSelectItem) this.props.onSelectItem(item);
	};

	componentWillUnmount = () => {
		document.removeEventListener('mouseup', this.closeHandler);
	};

	closeHandler = () => {

		if (this.props.onClose) this.props.onClose();
		this.setState({ open: false });
	};

	render() {
		const classNames = this.props.classNames || defaultClassNames;

		const popupCssId = this.props.popupCssId || this.cssId;
		const popupCss = this.props.popupCss || this.css;

		let header;
		let menu;

		if (this.state.open) {
			header = (
				<div
					style={{ width: this.props.width || '100%' }}
					className={this.props.css[classNames.HEADER]}
				>
					{this.props.header}
				</div>
			);
			menu = (
				<MenuPopup
					style={{ width: this.props.width || '100%' }}
					css={popupCss}
					cssId={popupCssId}
					data={this.props.data}
					onMenuItem={this.selectItemHandler}
					initialSelectedIndex={this.props.initialSelectedIndex}
				/>
			);
		}

		const selectedIndex =
			this.props.selectedIndex !== undefined
				? this.props.selectedIndex
				: this.state.selectedIndex;

		const text = this.props.text || (selectedIndex > -1 ? this.props.data[selectedIndex].text : '');

		return (
			<div style={{ width: this.props.width || '100%' }}>
				<div
					onMouseUp={this.clickHandler}
					className={this.props.css[classNames.DROPDOWN]}
				>
					<div className={this.props.css[classNames.TEXT]}>{text}</div>
					<div className={this.props.css[classNames.ARROW]}>
						{this.props.arrow}
					</div>
				</div>
				<div className={this.props.css[classNames.POPUP]}>
					{header}
					{menu}
				</div>
			</div>
		);
	}
}

export default withSelectIndex(withTheming(DropDown), {
	ignore: { enterIndex: true, leaveIndex: true },
});
