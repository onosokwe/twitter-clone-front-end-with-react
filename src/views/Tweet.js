import React, { Component } from 'react';
import admin from '../assets/admin.jpg';
import { postData } from "../config/config";

class Tweet extends Component {
	constructor(props){
        super(props);
        this.state = {post: '', dis: true,err:'', user: this.props.user.user}
        this.postTweet = this.postTweet.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
	handleChange(e) {
		this.setState({[e.target.id] : e.target.value});
		if(this.state.post === ""){
			this.setState({dis: true});
		} else {this.setState({dis: false})}
	}
	postTweet(e){
		e.preventDefault();
		if(this.state.post !== ""){
		let payload = {key: 'PTW', tweet: this.state.post, 
		user: this.state.user.name, 
		uuid: this.state.user.userid}
		postData(payload)
            .then((res) => {
                this.setState({err: res.data});
                if(res.code === '00'){this.setState({suc: res.data, err:''}); } 
            });
		} 
		console.log(this.state.err)
	}
	render(){
		return (
			<React.Fragment>
				<div className="tweet">
					<div className="tweet_img">
						<img src={admin} className="img-fluid" alt="admin" />
					</div>
					<div className="tweet_box">
						<form onSubmit={this.postTweet} >
							<textarea 
								cols="33" 
								rows="2" 
								className="form-control" 
								maxLength="240"
								onChange={this.handleChange}
								id="post" 
								placeholder="Hey! What's up?">
							</textarea>
							<button 
								type="submit" 
								disabled={this.state.dis}
								className="btn btn-info btn-block">Tweet
							</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Tweet;