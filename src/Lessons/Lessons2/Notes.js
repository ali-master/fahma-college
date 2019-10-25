import * as React from "react";
import Row from "./Row";
import Input from "./Input";

function DeleteNote(props) {
	function handleClick(e) {
		e.preventDefault();
		e.stopPropagation();

		props.onClick(props.index);
	}
	return (
		<button type="button" onClick={handleClick}>Delete</button>
	)
}

class Notes extends React.Component {
	state = {
		lists: [
			{text: "Test", done: false}
		]
	}

	handleAddNote = newNote => {
		this.setState({
			lists: this.state.lists.concat([newNote]),
		}, () => {
			window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
		})
	}

	componentDidMount() {
		this.setState({
			lists: JSON.parse(window.localStorage.getItem("lists")) || []
		})
	}
	

	handleClick = (index) => {
		this.setState(prevState => {
			const newLists = [...prevState.lists];
			newLists[index].done = !newLists[index].done;

			return {
				lists: newLists
			}
		}, () => {
			window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
		})
	}
	
	// handleDelete = (indx) => {
	// 	const listClone = [...this.state.lists];
		
	// 	delete listClone[indx];


	// 	this.setState({
	// 		// lists: this.state.lists.filter((_, index) => index !== indx)
	// 		lists: listClone.filter(row => Boolean(row))
	// 	})
	// }

	// handleDelete = (indx) => {
	// 	const listClone = [...this.state.lists];

	// 	listClone.splice(indx, 1);

	// 	this.setState({
	// 		lists: listClone
	// 	})
	// }
	handleDelete = (indx) => {
		const listClone = this.state.lists.slice();
		const beforeList = listClone.slice(0, indx);
		const afterList = listClone.slice(indx + 1);

		// listClone.splice(indx, 1);

		this.setState({
			lists: [...beforeList, ...afterList]
		}, () => {
			window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
		})
	}

	render() {
		const {lists} = this.state;
		return (
			<div>
				<div>
					<Input onAdd={this.handleAddNote} />
				</div>
				<div className="note-lists">
					{lists.map((row, index) => {
						return <Row delete={DeleteNote} onDelete={this.handleDelete} key={index} index={index} text={row.text} done={row.done} onClick={this.handleClick}>
							#{index}
						</Row>
					})}
				</div>
			</div>
		)
	}
}

export default Notes;