import React, { useState } from "react";

const Markup = props => {
    const [isOver, setIsOver] = useState(false);

    const mouseOverHandler = ev => {
        setIsOver(true);
        if (props.onMouseOver) props.onMouseOver(ev);
    }

    const mouseLeaveHandler = ev => {
        setIsOver(false);
        if (props.onMouseOver) props.onMouseLeave(ev);
    }

    const mouseDownHandler = ev => {
        if (props.onClick) props.onClick(ev, props);
    }
    
    const style = {...props.style};
    style.textDecoration = props.underline ? "underline" : null;
    style.fontWeight = props.bold ? "bold" : null;
    style.fontStyle = props.italic ? "italic" : null;
    style.fontSize = props.size || null;

    if (isOver) {
        style.color = props.highlightColor || props.color || null;
        style.backgroundColor = props.highlightBackgroundColor || props.backgroundColor || null;
    }
    else {
        style.color = props.color || null;
        style.backgroundColor = props.backgroundColor || null;
    } 

    style.cursor = props.cursor || null;
    style.textAlign = props.align || null;

    
    
    if (props.div)
        return <div onMouseEnter={mouseOverHandler} onMouseLeave={mouseLeaveHandler} onMouseDown={mouseDownHandler} style={style}>{props.children}</div>;
    else
        return <span onMouseEnter={mouseOverHandler} onMouseLeave={mouseLeaveHandler} onMouseDown={mouseDownHandler} style={style}>{props.children}</span>;
}

export default Markup;