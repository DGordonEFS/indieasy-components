import React from "react";

const Markup = props => {
    
    const style = {};
    style.textDecoration = props.underline ? "underline" : null;
    style.fontWeight = props.bold ? "bold" : null;
    style.fontStyle = props.italic ? "italic" : null;
    
    style.color = props.color || null;
    style.backgroundColor = props.backgroundColor || null;

    return <span style={style}>{props.children}</span>;
}

export default Markup;