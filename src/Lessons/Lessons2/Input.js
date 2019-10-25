import React from 'react'
class Input extends React.Component {
	state = {
		inputVal: "",
	}
	
	handleChange = (e) => {
		this.setState({
			inputVal: e.target.value, 
		})
	}

	handleClick = () => {
		this.props.onAdd({
			text: this.state.inputVal,
			done: false
		})
		this.setState({
			inputVal: ""
		})
	}

	render() {
		const {inputVal} = this.state;
		return (
			<div>
				<input value={inputVal} onChange={this.handleChange} />
				<button type="button" onClick={this.handleClick}>Add</button>
			</div>
		)

	}
}

export default Input
