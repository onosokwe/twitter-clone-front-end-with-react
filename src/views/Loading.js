import React from 'react';
import spinner from '../assets/spinner.svg';

const Loading = (props) => (
	<div className="container-fluid text-center divcall" style={{padding: '20px', margin:'50px 0'}}>
		<img src={spinner} alt="spinner" />
		<p style={{fontSize:'11px'}}>{props.message}</p>
	</div>
);

export default Loading;