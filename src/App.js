import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Notes from './Lessons/Lessons2/Notes';


class App extends Component {
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

	componentDidMount() {
		console.log("App: did mount");
	}

	componentWillMount() {
		console.log("App: will mount")
	}

	render() {
		return  <div className="App">
        <Notes/>
      </div>
	}
}

export default App;
