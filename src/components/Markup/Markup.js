import React from "react";
import css from "./Markup.module.css";

const Markup = props => {
    const classes = [];
    if (props.underline) classes.push(css.underline);
    if (props.bold) classes.push(css.bold);
    if (props.italic) classes.push(css.italic);

    return <span className={classes.join(' ')}>{props.children}</span>;
}

export default Markup;