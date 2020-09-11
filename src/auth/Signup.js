import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../assets/icon.png';
import { postData } from "../config/config";

class Signup extends Component {
	state = {email: '', password: '', phone: '', err:'', suc: false}
	handleChange = (e) => {this.setState({[e.target.id] : e.target.value})}
	handleSubmit = (e) => {
		e.preventDefault();
		if(this.state.email === "" || this.state.phone === "" || this.state.password === ""){
            this.setState({err: 'All fields are required' });
        } else if(this.state.email && this.state.phone && this.state.password){
            let payload = {key: 'SUP', email:this.state.email, password:this.state.password, 
            phone: this.state.phone}
            postData(payload)
            .then((res) => {
                this.setState({err: res.data});
                if(res.code === '00'){this.setState({suc: res.data, err:''});
                setTimeout(function(){ return (window.location.href="/") ;}, 1300);}
            });
        }
		
	}
	render(){
		if(this.state.suc){
            return (<Redirect to={'/'} />)
        } else return (
			<React.Fragment>
				<section className="container-fluid">
			        <div className="row">
			            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 offset-md-3 offset-sm-3">
			            	<Link to="/home">
			            		<img src={logo} className="img-fluid logo" alt="logo" />
			            	</Link>
			            	<div className="form_box">
				                <h3>Sign Up</h3>
				                <p className="text-success">{this.state.suc}</p>
				                <p className="text-danger">{this.state.err}</p> 
					            <form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<label>Email</label>
										<input 
											className="form-control" 
											type="email" 
											id="email" 
											placeholder="Email" 
											onChange={this.handleChange}
										/>
									</div>
									<div className="form-group">
										<label>Phone Number</label>
										<input 
											className="form-control" 
											type="tel" 
											id="phone" 
											maxLength="11"
											placeholder="Phone Number" 
											onChange={this.handleChange}
										/>
									</div>
									<div className="form-group">
										<label>Password</label>
										<input 
											className="form-control" 
											type="password" 
											id="password" 
											placeholder="Password" 
											onChange={this.handleChange}
										/>
									</div>
									<div className="form-group">
										<button className="btn btn-block">SIGN UP</button>
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

export default Signup;
