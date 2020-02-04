import { applyThemeFromJSON } from 'theming/theme';

export const BUTTON = 'button';
export const LIST_ITEM = 'list-item';
export const LIST_ITEM_SELECTED = 'list-item-selected';
export const LIST_ITEM_TEXT = 'list-item-text';
export const LIST_ITEM_RIGHT_CONTENT_TEXT = 'list-item-text-right-content';
export const LIST_ITEM_BUTTON = 'list-item-button';
export const LIST_ITEM_BUTTON_SELECTED = 'list-item-button-selected';
export const LIST = 'list';
export const PANEL = 'panel';
export const SCROLL_PANE = 'scroll-pane';
export const SPLIT_PANE = 'split-pane';
export const SPLIT_PANE_SEPARATOR = 'split-pane-separator';
export const TAB_BAR = 'tab-bar';
export const TAB_BAR_ITEM = 'tab-bar-item';
export const TAB_BAR_ITEM_SELECTED = 'tab-bar-item-selected';
export const TEXT = 'text';
export const TOOL_BAR = 'tool-bar';
export const TOOL_BAR_ITEM = 'tool-bar-item';

const THEME_DEFAULT = '_default';

const colors = {
	WHITE: 'white',
	BLACK: 'black',
	GRAY: 'gray',
	LIGHT_GRAY: '#666666',
	LIGHTER_GRAY: '#BBBBBB',
	DARK_GRAY: '#464646',
	DARKER_GRAY: '#363636',
	DARKEST_GRAY: '#252525',
};

const theme = {
	theme: '_default',
	components: [
		{
			id: BUTTON,
			value: {
				backgroundColor: colors.GRAY,
				border: '1px solid black',
				color: 'white',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
				},
			},
		},
		{
			id: LIST_ITEM,
			value: {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: colors.GRAY,
				border: '1px solid black',
				color: 'white',
				padding: '5px',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
		{
			id: LIST_ITEM_SELECTED,
			value: {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: colors.DARKEST_GRAY,
				border: '1px solid black',
				color: 'white',
				padding: '5px',
				cursor: 'pointer',
			},
		},
		{
			id: LIST_ITEM_TEXT,
			value: {
				userSelect: 'none',
			},
		},
		{
			id: LIST_ITEM_RIGHT_CONTENT_TEXT,
			value: {
				marginRight: '15px',
				userSelect: 'none',
			},
		},
		{
			id: LIST_ITEM_BUTTON,
			value: {
				backgroundColor: 'transparent',
				color: 'black',
				marginLeft: '5px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
				':hover': {
					color: 'white',
				},
			},
		},
		{
			id: LIST_ITEM_BUTTON_SELECTED,
			value: {
				backgroundColor: 'transparent',
				color: 'white',
				marginLeft: '5px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
				':hover': {
					color: 'white',
				},
			},
		},
		{
			id: LIST,
			value: {
				backgroundColor: 'transparent',
				border: '1px solid black',
				color: 'white',
				padding: '2px',
			},
		},
		{
			id: PANEL,
			value: {
				backgroundColor: colors.DARKEST_GRAY,
			},
		},
		{
			id: SCROLL_PANE,
			value: {},
		},
		{
			id: SPLIT_PANE,
			value: {},
		},
		{
			id: SPLIT_PANE_SEPARATOR,
			value: {
				backgroundColor: colors.DARKER_GRAY,
				boxSizing: 'border-box',
			},
		},
		{
			id: TAB_BAR,
			value: {
				backgroundColor: colors.LIGHT_GRAY,
				width: '100%',
				height: '2rem',
				display: 'flex',
				alignItems: 'center',
				borderTop: '1px solid black',
				borderBottom: '1px solid black',
				boxSizing: 'boder-box',
			},
		},
		{
			id: TAB_BAR_ITEM,
			value: {
				backgroundColor: colors.LIGHT_GRAY,
				color: 'white',
				display: 'flex',
				alignItems: 'center',
				borderRight: '1px solid black',
				height: '100%',
				paddingLeft: '5px',
				paddingRight: '5px',
				userSelect: 'none',
				boxSizing: 'border',
				fontSize: '0.8rem',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
		{
			id: TAB_BAR_ITEM_SELECTED,
			value: {
				backgroundColor: colors.DARKEST_GRAY,
				color: 'white',
				display: 'flex',
				alignItems: 'center',
				borderRight: '1px solid black',
				height: '100%',
				paddingLeft: '10px',
				paddingRight: '10px',
				paddingBottom: '2px',
				userSelect: 'none',
				boxSizing: 'border',
				fontSize: '1.2rem',
				cursor: 'pointer',
				marginBottom: '-1px',
				verticalAlign: 'middle',
				':hover': {},
			},
		},
		{
			id: TEXT,
			value: {
				userSelect: 'none',
			},
		},
		{
			id: TOOL_BAR,
			value: {
				backgroundColor: colors.DARKER_GRAY,
				padding: '2px',
				paddingLeft: '5px',
				width: '100%',
				height: '2rem',
			},
		},
		{
			id: TOOL_BAR_ITEM,
			value: {
				backgroundColor: colors.DARKER_GRAY,
				color: 'white',
				fontSize: '1.2rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
	],
};

applyThemeFromJSON(theme);

const lightTheme = {
	theme: 'light',
	components: [
		{
			id: BUTTON,
			value: {
				backgroundColor: 'purple',
				border: '1px solid black',
				color: 'white',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
				},
			},
		},
		{
			id: LIST_ITEM,
			value: {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: 'blue',
				border: '1px solid black',
				color: 'white',
				padding: '5px',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
		{
			id: LIST_ITEM_SELECTED,
			value: {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: colors.DARKEST_GRAY,
				border: '1px solid black',
				color: 'white',
				padding: '5px',
				cursor: 'pointer',
			},
		},
		{
			id: LIST_ITEM_TEXT,
			value: {
				userSelect: 'none',
			},
		},
		{
			id: LIST_ITEM_RIGHT_CONTENT_TEXT,
			value: {
				marginRight: '15px',
				userSelect: 'none',
			},
		},
		{
			id: LIST_ITEM_BUTTON,
			value: {
				backgroundColor: 'transparent',
				color: 'black',
				marginLeft: '5px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
				':hover': {
					color: 'white',
				},
			},
		},
		{
			id: LIST_ITEM_BUTTON_SELECTED,
			value: {
				backgroundColor: 'transparent',
				color: 'white',
				marginLeft: '5px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
				':hover': {
					color: 'white',
				},
			},
		},
		{
			id: LIST,
			value: {
				backgroundColor: 'transparent',
				border: '1px solid black',
				color: 'white',
				padding: '2px',
			},
		},
		{
			id: PANEL,
			value: {
				backgroundColor: colors.WHITE,
			},
		},
		{
			id: SCROLL_PANE,
			value: {},
		},
		{
			id: SPLIT_PANE,
			value: {},
		},
		{
			id: SPLIT_PANE_SEPARATOR,
			value: {
				backgroundColor: 'purple',
				boxSizing: 'border-box',
			},
		},
		{
			id: TAB_BAR,
			value: {
				backgroundColor: 'white',
				width: '100%',
				height: '2rem',
				display: 'flex',
				alignItems: 'center',
				borderTop: '1px solid black',
				borderBottom: '1px solid black',
				boxSizing: 'boder-box',
			},
		},
		{
			id: TAB_BAR_ITEM,
			value: {
				backgroundColor: 'purple',
				color: 'white',
				display: 'flex',
				alignItems: 'center',
				borderRight: '1px solid black',
				height: '100%',
				paddingLeft: '5px',
				paddingRight: '5px',
				userSelect: 'none',
				boxSizing: 'border',
				fontSize: '0.8rem',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
		{
			id: TAB_BAR_ITEM_SELECTED,
			value: {
				backgroundColor: 'white',
				color: 'purple',
				display: 'flex',
				alignItems: 'center',
				borderRight: '1px solid black',
				height: '100%',
				paddingLeft: '10px',
				paddingRight: '10px',
				paddingBottom: '2px',
				userSelect: 'none',
				boxSizing: 'border',
				fontSize: '1.2rem',
				cursor: 'pointer',
				marginBottom: '-1px',
				verticalAlign: 'middle',
				':hover': {},
			},
		},
		{
			id: TEXT,
			value: {
				userSelect: 'none',
			},
		},
		{
			id: TOOL_BAR,
			value: {
				backgroundColor: colors.DARKER_GRAY,
				padding: '2px',
				paddingLeft: '5px',
				width: '100%',
				height: '2rem',
			},
		},
		{
			id: TOOL_BAR_ITEM,
			value: {
				backgroundColor: colors.DARKER_GRAY,
				color: 'white',
				fontSize: '1.2rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
				cursor: 'pointer',
				':hover': {
					backgroundColor: colors.LIGHTER_GRAY,
					color: 'black',
				},
			},
		},
	],
};

applyThemeFromJSON(lightTheme);
