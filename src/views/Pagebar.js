import React from 'react';
import { Link } from 'react-router-dom';

const Pagebar = () => {
	return (
		<React.Fragment>
			<div className="pagebar">
				<Link to="/home"><h1>Home</h1></Link>
			</div>
		</React.Fragment>
	);
}

export default Pagebar;