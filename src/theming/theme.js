class ThemeManager {
	_themes = {};
	_currentThemeId;

	addTheme = (theme) => {
		this._themes[theme.id] = theme;
	};

	removeTheme = (id) => {
		delete this._themes[id];
	};

	getTheme = (id) => {
		return this._themes[id];
	};

	setCurrentTheme = (id) => {
		this._currentThemeId = id;
	};

	getCurrentTheme = () => {
		const theme = this._themes[this._currentThemeId];
		return theme;
	};

	createFinalStyle = (defaultComponentTheme, props, baseStyle) => {
		const theme = this.getCurrentTheme();

		const style = baseStyle || {};

		if (props.baseStyle) {
			Object.assign(style, props.baseStyle);
		}

		const componentThemeIds = props.themes || [
			props.theme || defaultComponentTheme,
		];

		if (props.additionalThemes)
			componentThemeIds.push(...props.additionalThemes);

		const componentThemes = componentThemeIds.map(
			(id) => theme.getComponent(id).value
		);

		componentThemes.forEach((componentTheme) => {
			Object.assign(style, componentTheme);
		});

		return style;
	};
}

// total theme for all components
export class Theme {
	id;
	components;
	constructor(id) {
		this.id = id;
		this.components = {};
	}

	addComponent = (componentTheme) => {
		this.components[componentTheme.id] = componentTheme;
	};

	removeComponent = (id) => {
		delete this.components[id];
	};

	getComponent = (id) => {
		return this.components[id];
	};
}

// theme for a specific components
export class ComponentTheme {
	id;
	value;
	constructor(id, value) {
		this.id = id;
		this.value = value;
	}
}

const themeManager = new ThemeManager();
themeManager.addTheme(new Theme('_default'));
themeManager.setCurrentTheme('_default');

export default themeManager;

export const currentTheme = themeManager.getCurrentTheme;
export const addComponentTheme = (id, value, themeId) => {
	const theme =
		themeManager.getTheme(themeId) || themeManager.getCurrentTheme();
	theme.addComponent(new ComponentTheme(id, value));
};
export const createFinalStyle = themeManager.createFinalStyle;

export const createTheme = (id) => {
	return themeManager.addTheme(new Theme(id));
};
