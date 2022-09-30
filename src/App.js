import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './config/PrivateRoute';
import PublicRoute from './config/PublicRoute';
// auth
import Login from './auth/Login';
import Signup from './auth/Signup';
import Forgot from './auth/Forgot';
// routes
import Home from './routes/Home';
import Profile from './routes/Profile';
// css styles
import './App.css';

class App extends Component {
	render () {
	  	return (
	    	<BrowserRouter>
	    		<Switch>
		    		<PublicRoute path='/' exact component={Home} />
		    		<PublicRoute path='/signup' component={Signup} />
		    		<PublicRoute path='/forgot' component={Forgot} />

		    		<PrivateRoute path="/login" component={Login} />
		    		<PrivateRoute path="/profile" user={this.props} component={Profile} />
	    		</Switch>
	    	</BrowserRouter>
	  	);
	}
}

export default App;
