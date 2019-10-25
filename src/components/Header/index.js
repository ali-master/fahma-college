import React, {PureComponent, Component} from "react";

class Header extends Component {
	static defaultProps = {
		title: ""
	}

	state = {
		count: 0,
		name: "Test"
	}

	increaseCount = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}
	decreaseCount = () => {
		this.setState(state => {
			return {
				count: state.count - 1
			}
		})
	}

	render() {
		return <div>
			<h1>{this.props.title}</h1>

			<p>{this.state.count}</p>

			<button onClick={this.increaseCount}>Add</button>
			<button onClick={this.decreaseCount}>Decrease</button>
		</div>
	}
}

export default Header;