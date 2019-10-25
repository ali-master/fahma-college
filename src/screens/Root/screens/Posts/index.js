import React from 'react'
import {Route} from "react-router-dom";
import Post from './screens/Post';
import { Link } from 'react-router-dom';

const Posts = () => {
	return (
		<div>
			<Route path="/posts" exact>Posts</Route>
			<Route path="/posts/:post" component={Post} />
		</div>
	)
}

export default Posts
