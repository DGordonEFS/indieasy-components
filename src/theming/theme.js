class ThemeManager {
	_themes = {};
	_currentThemeId;

	_listeners = { change: [] };

	addEventListener = (type, func) => {
		this._listeners[type].push(func);
	};

	removeEventListener = (type, func) => {
		this._listeners[type] = this._listeners[type].filter((x) => x != func);
	};

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

		this._listeners.change.forEach((func) => func());
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

export const listen = (func) => {
	themeManager.addEventListener('change', func);
};

export const unlisten = (func) => {
	themeManager.removeEventListener('change', func);
};

export const applyThemeFromJSON = (json) => {
	const data =
		typeof json === 'string' || json instanceof String
			? JSON.parse(json)
			: json;

	if (!themeManager.getTheme(data.theme))
		themeManager.addTheme(new Theme(data.theme));

	data.components.forEach((componentTheme) => {
		addComponentTheme(componentTheme.id, componentTheme.value, data.theme);
	});
};

export const setCurrentTheme = themeManager.setCurrentTheme;

export const themeComponent = (component) => {
	component.prototype.createStyle = (defaultTheme, props, baseStyle) => {
		return createFinalStyle(defaultTheme, props, baseStyle);
	};

	component.prototype.componentDidMount = function() {
		this.callForceUpdate = () => this.forceUpdate();
		listen(this.callForceUpdate);
	};

	component.prototype.componentWillUnmount = function() {
		unlisten(this.callForceUpdate);
	};

	return component;
};
