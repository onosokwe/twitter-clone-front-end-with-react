import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icon.png';

class Forgot extends Component {
	state = {email: ''}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();

	}
	render(){
		return(
			<React.Fragment>
				<section className="container-fluid">
			        <div className="row">
			            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 offset-md-3 offset-sm-3">
			            	<Link to="/home">
			            		<img src={logo} className="img-fluid logo" alt="logo" />
			            	</Link>
			            	<div className="form_box">
				                <h3>Reset Password</h3>
					            <form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<label>Email</label>
										<input 
											className="form-control" 
											type="email" 
											name="email" 
											placeholder="Enter your Registered Email" 
											onChange={this.onChange}
										/>
									</div>
									<div className="form-group">
										<button className="btn btn-block">RESET PASSWORD</button>
									</div>
									<p>
										<Link to="/">Login</Link>
									</p>
								</form>
				            </div>
			        	</div>
			    	</div>
				</section>
			</React.Fragment>
		)
	}
}

export default Forgot;
