import React from 'react';

import { withSelectIndex } from '../../hoc/withSelectIndex';
import { withTheming } from '../../hoc/withTheming';

export const defaultClassNames = {
	LIST: 'list',
	ITEM: 'item',
	ENTERED: 'entered',
	SELECTED: 'selected',
	ODD: 'odd',
	EVEN: 'even',
};

const ListItem = (props) => {
	const classNames = props.classNames || defaultClassNames;

	const classes = [props.css[classNames.ITEM]];
	if (props.index % 2 !== 0) classes.push(props.css[classNames.ODD]);
	else classes.push(props.css[classNames.EVEN]);
	if (props.entered) classes.push(props.css[classNames.ENTERED]);
	if (props.selected) classes.push(props.css[classNames.SELECTED]);

	return (
		<div {...props.itemProps} className={classes.join(' ')}>
			{props.data.text}
		</div>
	);
};

const List = (props) => {
	const classNames = props.classNames || defaultClassNames;

	const style = {
		display: 'flex',
		flexDirection: props.horizontal ? 'row' : 'column',
		...props.style,
	};

	if (props.reverse) style.flexDirection += '-reverse';

	const selectItemHandler = (ev, item, index) => {
		if (props.onMouseUp) props.onMouseUp(ev);
		if (props.onSelectItem) props.onSelectItem(item);
		if (props.onSelectIndex) props.onSelectIndex(index);
	};

	const enterIndexHandler = (ev, item, index) => {
		if (props.onMouseEnter) props.onMouseEnter(ev);
		if (props.onEnterItem) props.onEnterItem(item);
		if (props.onEnterIndex) props.onEnterIndex(index);
	};

	const leaveIndexHandler = (ev, item, index) => {
		if (props.onMouseLeave) props.onMouseLeave(ev);
		if (props.onLeaveItem) props.onLeaveItem(item);
		if (props.onLeaveIndex) props.onLeaveIndex(index);
	};

	const defaultItemRenderer = props.itemRenderer || ListItem;

	const children = props.data.map((item, index) => {
		const ItemRenderer = withTheming(item.renderer || defaultItemRenderer);
		const itemCss = item.css || props.itemCss || props.css;
		const itemCssId = item.cssId || props.itemCssId || props.cssId;

		const itemProps = {
			onMouseUp: (ev) => selectItemHandler(ev, item, index),
			onMouseEnter: (ev) => enterIndexHandler(ev, item, index),
			onMouseLeave: (ev) => leaveIndexHandler(ev, item, index),
		};

		return (
			<ItemRenderer
				key={`${index}_${item.text}`}
				css={itemCss}
				cssId={itemCssId}
				data={item}
				itemProps={itemProps}
				ownerProps={props.ownerProps || props}
				selected={props.selectedIndex === index}
				entered={props.enteredIndex === index}
				item={item}
				classNames={props.classNames || classNames}
				index={index}
			/>
		);
	});

	const mouseDownHandler = (ev) => {
		if (props.onMouseDown) props.onMouseDown(ev);
	};

	const mouseUpHandler = (ev) => {
		if (props.onMouseUp) props.onMouseUp(ev);
	};

	const mouseEnterHandler = (ev) => {
		if (props.onMouseEnter) props.onMouseEnter(ev);
	};

	const mouseLeaveHandler = (ev) => {
		if (props.onMouseLeave) props.onMouseLeave(ev);
	};

	return (
		<div
			style={style}
			className={props.css ? props.css[classNames.LIST] : null}
			onMouseDown={mouseDownHandler}
			onMouseUp={mouseUpHandler}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{children}
		</div>
	);
};

export default withSelectIndex(withTheming(List));
