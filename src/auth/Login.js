import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import User from "../views/User";
import logo from '../assets/icon.png';
import { postData } from "../config/config";

class Login extends Component {
	state = {email: '', password: '', user: null, code: '', redirect: false}
	handleChange = (e) => {this.setState({[e.target.id] : e.target.value});}
	handleSubmit = (e) => {
		e.preventDefault();
		let payload = {key: 'LOG', email: this.state.email, password: this.state.password}
        if(this.state.email === "" || this.state.password === ""){
            this.setState({error: 'Error with Login Details' });
        } else if(this.state.email && this.state.password){
            postData(payload)
            .then((res) => {
                if(res.code === '00'){
                    sessionStorage.setItem('user', JSON.stringify(res.data));
                    this.setState({redirect: true, code: res.code, user: res.data});
                    return (<Redirect to={'/home'} render={(user) => <User user={this.state.user} />} />);
                } else {this.setState({error: res.data});}
            });
        }
	}
	render(){
		if(this.state.redirect && this.state.code === '00'){
            return (<Redirect to={'/home'} />)
        } else return (
			<React.Fragment>
				<section className="container-fluid">
			        <div className="row">
			            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 offset-md-3 offset-sm-3">
			            	<Link to="/home">
			            		<img src={logo} className="img-fluid logo" alt="logo" />
			            	</Link>
			            	<div className="form_box">
				                <h3>Login</h3>
				               	<p className="text-danger">{this.state.error}</p> 
					            <form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<label>Email</label>
										<input 
											className="form-control" 
											type="email" 
											id="email" 
											placeholder="Enter your Email" 
											onChange={this.handleChange}
										/>
									</div>
									<div className="form-group">
										<label>Password</label>
										<input 
											className="form-control" 
											type="password" 
											id="password" 
											placeholder="Enter your Password" 
											onChange={this.handleChange}
										/>
									</div>
									<div className="form-group">
										<button className="btn btn-block"> LOGIN </button>
									</div>
									<p className="float-right">
										<Link to="/forgot">Forgot Password</Link>
									</p>
									<p>
										<Link to="/signup">Sign Up</Link>
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

export default Login;
