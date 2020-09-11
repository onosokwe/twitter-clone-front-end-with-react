import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from '../config/PrivateRoute';
import {userContext} from '../config/context';

import Home from '../routes/Home';
import Profile from '../routes/Profile';

const User = ({user}) => {
	return (
		<userContext.Provider value={user}>
			<BrowserRouter>
				<Route exact path="/home" render={value => (
					<Home user={user}  />
				)} /> 
				<PrivateRoute path="/profile" user={user} component={Profile} />
			</BrowserRouter>
		</userContext.Provider>
	);
}

export default User;
