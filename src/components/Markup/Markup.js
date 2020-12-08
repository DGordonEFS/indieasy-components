import React from "react";
import css from "./Markup.module.css";

const Markup = props => {
    const classes = [];
    if (props.underline) classes.push(css.underline);
    if (props.bold) classes.push(css.bold);
    if (props.italic) classes.push(css.italic);
    
    const style = {};
    style.color = props.color || null;
    style.backgroundColor = props.backgroundColor || null;

    return <span style={style} className={classes.join(' ')}>{props.children}</span>;
}

export default Markup;