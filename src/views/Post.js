import React, { Component } from 'react';
import admin from '../assets/admin.jpg';
import { Link } from 'react-router-dom';
import timeDifference from '../config/time';
import { postData, axiosInstance } from "../config/config";

class Post extends Component {
	state = {tweetid: this.props.tweet.tweetid, tlikes: null, tmsg: null, value: ''}
	componentDidMount(){
		axiosInstance.post("/api.php", {key:'FTLKS', tweetid: this.state.tweetid })
		.then(res => this.setState({tlikes : res.data.data }) )
		.catch(err => console.log(err))
	}
	likeTweet = (e) => {
		e.preventDefault();
		let likes = this.state.tlikes;
		let payload = {key: 'LKT', tweetid: this.state.tweetid, userid: this.props.userid}
		postData(payload)
            .then((res) => {
            	this.setState({tmsg: res.data[0]});
            	res.code === '00' 
            		? this.setState({tlikes: ++likes, value: 'liked'})
                	: this.setState({tlikes: --likes, value: ''})
            }).catch((err) => console.log(err));
	}
	render(){
		var previous = this.props.tweet.posted_on;
		return (
			<React.Fragment>
				<div className="posts">
					<div className="post">
						<div className="post_img">
							<img src={admin} alt="admin" className="img-fluid" />
						</div>
						<div className="post_box">
							<div className="post_body">
								<Link to="/home">
									<h4>{this.props.tweet.user} 
									<span>{this.props.tweet.handle} </span> 
									<span>|</span> <span> {timeDifference(previous)}</span>
									</h4>
								</Link>
								<p>{this.props.tweet.tweet}</p>
							</div>
							<form onSubmit={this.likeTweet}>
								<label>
									<button  
										value={this.state.value}
										type="submit">
										<i className="fa fa-heart-o"></i>
									</button>
									<span>{this.state.tlikes}</span>
								</label>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Post;