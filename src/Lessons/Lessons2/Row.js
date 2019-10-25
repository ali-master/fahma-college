import React from 'react'
import PropTypes from "prop-types";

const Row = props => {	
	const DeleteButton = props.delete;
	return (
		<div onClick={() => props.onClick(props.index)}>
			<p style={{textDecoration: props.done ? "line-through" : "none"}}>{props.children} {props.text} <DeleteButton index={props.index} onClick={props.onDelete} /></p>
		</div>
	)
}
Row.propTypes = {
	index: PropTypes.number,
	text: PropTypes.string,
	done: PropTypes.bool,
	onClick: PropTypes.func,
	onDelete: PropTypes.func
}

export default Row
