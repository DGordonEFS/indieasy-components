import { applyThemeFromJSON } from 'theming/theme';

export const BUTTON = 'button';
export const DIVIDER = 'divider';
export const LIST_ITEM = 'list-item';
export const LIST_ITEM_DISABLED = 'list-item-disabled';
export const LIST_ITEM_SELECTED = 'list-item-selected';
export const LIST_ITEM_TEXT = 'list-item-text';
export const LIST_ITEM_RIGHT_CONTENT_TEXT = 'list-item-text-right-content';
export const LIST_ITEM_BUTTON = 'list-item-button';
export const LIST_ITEM_BUTTON_SELECTED = 'list-item-button-selected';
export const LIST = 'list';
export const MENU = 'menu';
export const MENU_SUB = 'menu-sub';
export const MENU_ITEM = 'menu-item';
export const MENU_ITEM_DISABLED = 'menu-item-disabled';
export const MENU_ITEM_SELECTED = 'menu-item-selected';
export const MENU_ITEM_BUTTON = 'menu-item-button';
export const MENU_ITEM_BUTTON_SELECTED = 'menu-item-button-selected';
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
export const TOOL_BAR_ITEM_SELECTED = 'tool-bar-item-selected';
export const TOOL_BAR_ITEM_ACTIVE = 'tool-bar-item-active';
export const TOOL_BAR_ITEM_DISABLED = 'tool-bar-item-disabled';

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
			id: DIVIDER,
			value: {
				width: '90%',
				height: '1px',
				backgroundColor: 'gray',
				marginLeft: 'auto',
				marginRight: 'auto',
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
			id: LIST_ITEM,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARK_GRAY,
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
			id: LIST_ITEM_DISABLED,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARK_GRAY,
				border: '1px solid black',
				color: 'gray',
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
				justifyContent: 'space-between',
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
			id: PANEL,
			value: {
				backgroundColor: colors.DARKEST_GRAY,
			},
		},
		{
			id: MENU,
			value: {
				position: 'absolute',
				backgroundColor: colors.DARKEST_GRAY,
				border: '1px solid black',
				color: 'white',
				boxSizing: 'border-box',
				filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))',
				padding: '5px',
			},
		},
		{
			id: MENU_SUB,
			value: {
				position: 'absolute',
				backgroundColor: colors.DARKEST_GRAY,
				border: '1px solid black',
				color: 'white',
				boxSizing: 'border-box',
				padding: '5px',
			},
		},
		{
			id: MENU_ITEM,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARKEST_GRAY,
				color: 'white',
				paddingTop: '4px',
				paddingBottom: '4px',
				paddingLeft: '20px',
				paddingRight: '10px',
			},
		},
		{
			id: MENU_ITEM_DISABLED,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARKEST_GRAY,
				color: 'gray',
				paddingTop: '4px',
				paddingBottom: '4px',
				paddingLeft: '20px',
				paddingRight: '10px',
			},
		},
		{
			id: MENU_ITEM_SELECTED,
			value: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: colors.DARKER_GRAY,
				color: 'white',
				paddingTop: '4px',
				paddingBottom: '4px',
				paddingLeft: '20px',
				paddingRight: '10px',
			},
		},
		{
			id: MENU_ITEM_BUTTON,
			value: {
				backgroundColor: 'transparent',
				color: 'white',
				marginLeft: '15px',
				display: 'initial',
				cursor: 'pointer',
				fontSize: '0.8rem',
			},
		},
		{
			id: MENU_ITEM_BUTTON_SELECTED,
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
			},
		},
		{
			id: TOOL_BAR_ITEM_SELECTED,
			value: {
				backgroundColor: colors.LIGHTER_GRAY,
				color: 'white',
				fontSize: '1.2rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
			},
		},
		{
			id: TOOL_BAR_ITEM_ACTIVE,
			value: {
				backgroundColor: colors.LIGHTER_GRAY,
				color: 'white',
				fontSize: '1.2rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
				paddingTop: '4px',
			},
		},
		{
			id: TOOL_BAR_ITEM_DISABLED,
			value: {
				backgroundColor: colors.DARKER_GRAY,
				color: 'gray',
				fontSize: '1.2rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingLeft: '5px',
				paddingRight: '5px',
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
			id: LIST,
			value: {
				backgroundColor: 'transparent',
				border: '1px solid black',
				color: 'white',
				padding: '2px',
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
			id: MENU,
			value: {
				backgroundColor: 'white',
				border: '1px solid black',
				color: 'white',
				padding: '2px',
			},
		},
		{
			id: MENU_ITEM,
			value: {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: 'purple',
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
			id: MENU_ITEM_SELECTED,
			value: {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: 'purple',
				border: '1px solid black',
				color: 'white',
				padding: '5px',
				cursor: 'pointer',
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
