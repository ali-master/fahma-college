import React from 'react'
import {withRouter} from "react-router";
const Post = props => {
console.log("Debug: props", props)
	function handleClick() {
		props.history.push("/")
	}
	
	return (
		<div onClick={handleClick}>
			Post: {props.match.params.post}
		</div>
	)
}

export default withRouter(Post)
