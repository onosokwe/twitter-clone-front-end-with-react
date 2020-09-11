import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from './config';
 
// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => !getUser() 
            	? <Component {...props} /> 
            	: <Redirect to={{ pathname: '/home' }} />
            }
        />
    )
}
 
export default PublicRoute;