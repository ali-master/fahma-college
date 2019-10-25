import React from 'react'
import {Route} from "react-router-dom";
import Post from './screens/Post';
import { Link } from 'react-router-dom';

const Posts = () => {
	return (
		<div>
			POSTS:  
			<Route path="/posts/:post" component={Post} />

			<Link to="/posts">Posts</Link>
		</div>
	)
}

export default Posts
