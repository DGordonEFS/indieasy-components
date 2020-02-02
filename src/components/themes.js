import { addComponentTheme } from 'theming/theme';

export const BUTTON = 'button';
export const LIST_ITEM = 'list-item';
export const LIST_ITEM_SELECTED = 'list-item-selected';
export const LIST_ITEM_TEXT = 'list-item-text';
export const LIST_ITEM_RIGHT_CONTENT_TEXT = 'list-item-text-right-content';
export const LIST_ITEM_BUTTON = 'list-item-button';
export const LIST_ITEM_BUTTON_SELECTED = 'list-item-button-selected';
export const LIST = 'list';
export const TAB_BAR = 'tab-bar';
export const TAB_BAR_ITEM = 'tab-bar-item';
export const TAB_BAR_ITEM_SELECTED = 'tab-bar-item-selected';
export const TEXT = 'text';
export const TOOL_BAR = 'tool-bar';
export const TOOL_BAR_ITEM = 'tool-bar-item';

const THEME_DEFAULT = '_default';

const colors = {
	GRAY: 'gray',
	LIGHT_GRAY: '#666666',
	LIGHTER_GRAY: '#BBBBBB',
	DARK_GRAY: '#464646',
	DARKER_GRAY: '#363636',
	DARKEST_GRAY: '#252525',
};

addComponentTheme(
	BUTTON,
	{
		backgroundColor: colors.GRAY,
		border: '1px solid black',
		color: 'white',
		':hover': {
			backgroundColor: colors.LIGHTER_GRAY,
		},
	},
	THEME_DEFAULT
);

addComponentTheme(
	LIST_ITEM,
	{
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
	THEME_DEFAULT
);

addComponentTheme(
	LIST_ITEM_SELECTED,
	{
		backgroundColor: colors.DARKEST_GRAY,
		border: '1px solid black',
		color: 'white',
		padding: '5px',
		cursor: 'pointer',
	},
	THEME_DEFAULT
);

addComponentTheme(
	LIST_ITEM_TEXT,
	{
		userSelect: 'none',
	},
	THEME_DEFAULT
);

addComponentTheme(
	LIST_ITEM_RIGHT_CONTENT_TEXT,
	{
		marginRight: '15px',
		userSelect: 'none',
	},
	THEME_DEFAULT
);

addComponentTheme(
	LIST_ITEM_BUTTON,
	{
		backgroundColor: 'transparent',
		color: 'black',
		marginLeft: '5px',
		display: 'initial',
		cursor: 'pointer',
		':hover': {
			color: 'white',
		},
	},
	THEME_DEFAULT
);

addComponentTheme(
	LIST_ITEM_BUTTON_SELECTED,
	{
		backgroundColor: 'transparent',
		color: 'white',
		marginLeft: '5px',
		display: 'initial',
		cursor: 'pointer',
		':hover': {
			color: 'white',
		},
	},
	THEME_DEFAULT
);

addComponentTheme(
	LIST,
	{
		backgroundColor: 'transparent',
		border: '1px solid black',
		color: 'white',
		padding: '2px',
	},
	THEME_DEFAULT
);

addComponentTheme(
	TAB_BAR,
	{
		backgroundColor: colors.DARKER_GRAY,
		width: '100%',
		height: '2rem',
		border: '1px solid black',
		display: 'flex',
		alignItems: 'flex-end',
	},
	THEME_DEFAULT
);

addComponentTheme(
	TAB_BAR_ITEM,
	{
		backgroundColor: colors.GRAY,
		color: 'white',
		display: 'flex',
		border: '1px solid black',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px',
		height: '40%',
		paddingTop: '6px',
		paddingLeft: '5px',
		paddingRight: '5px',
		paddingBottom: '2px',
		userSelect: 'none',
		boxSizing: 'border',
		fontSize: '0.8rem',
		cursor: 'pointer',
		':hover': {
			backgroundColor: colors.LIGHTER_GRAY,
			color: 'black',
		},
	},
	THEME_DEFAULT
);

addComponentTheme(
	TAB_BAR_ITEM_SELECTED,
	{
		backgroundColor: colors.DARKEST_GRAY,
		color: 'white',
		display: 'flex',
		borderTop: '1px solid black',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		borderBottom: 'none',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px',
		height: '70%',
		paddingTop: '3px',
		paddingLeft: '10px',
		paddingRight: '10px',
		userSelect: 'none',
		boxSizing: 'border',
		fontSize: '1.1rem',
		cursor: 'pointer',
	},
	THEME_DEFAULT
);

addComponentTheme(
	TEXT,
	{
		userSelect: 'none',
	},
	THEME_DEFAULT
);

addComponentTheme(
	TOOL_BAR,
	{
		backgroundColor: colors.DARKER_GRAY,
		padding: '2px',
		paddingLeft: '5px',
		width: '100%',
		height: '2rem',
	},
	THEME_DEFAULT
);

addComponentTheme(
	TOOL_BAR_ITEM,
	{
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
	THEME_DEFAULT
);
