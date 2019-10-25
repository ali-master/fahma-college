import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NotFound from "./components/NotFound"
import Home from './screens/Root';
import { Redirect } from 'react-router';

ReactDOM.render((
	<BrowserRouter>
	<Switch>
		<Redirect from="/" exact to="/posts" />
		<Route path="/" component={Home} />
		<Route path="*" component={NotFound} />
	</Switch>
	</BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
