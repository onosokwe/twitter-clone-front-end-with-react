import React from 'react';
import { getUser } from './config';

let user = getUser();

let url = "http://localhost:3000/";
// let url = "https://revlearn.netlify.app/";

if (user === null) {
	window.onload = function() {
    	if(window.location.href === url + "home") {
        	window.location.reload(true);
    	}
	}
} 

export const userContext = React.createContext({
	user: user
});