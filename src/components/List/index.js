
import * as React from "react";
import Row from "./Row";

class List extends React.Component {
	state = {
		lists: [
			{text: "test 1", done: false},
			{text: "test 2", done: true},
		]
	}

	handleClick = (index, state) => {
		const newLists = [...this.state.lists];
		newLists[index].done = state;

		this.setState({
			lists: newLists
		})
	}

	render() {
		return (
			<div>
				{this.state.lists.map((list, index) => (
					<Row key={index} index={index} text={list.text} done={list.done} onClick={this.handleClick} />
				))}
			</div>
		)
	}
}

export default List;