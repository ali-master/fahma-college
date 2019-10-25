import * as React from "react";

function Row(props) {
	return (
		<p onClick={() => props.onClick(props.index, !props.done)} key={props.index} style={{textDecoration: props.done ? "line-through" : "none"}}>
			{props.text}
		</p>
	)
}

export default Row