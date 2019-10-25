import React from 'react'
import {Switch, Route} from "react-router-dom";
import Posts from "./screens/Posts";

const Home = () => {
	return (
		<div>
			<Switch>
				<Route path="/posts" component={Posts} />
			</Switch>
		</div>
	)
}

export default Home
