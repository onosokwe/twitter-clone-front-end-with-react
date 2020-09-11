import React, { Component } from 'react';
import Loading from "./Loading";
import Post from './Post';
import { axiosInstance } from "../config/config"

class Posts extends Component {
	constructor(props){
        super(props);
        this.state = {tweets: [], code: ''}
    }
	componentDidMount(){
		axiosInstance.post("/api.php", {key:'GATS'})
		.then(res => this.setState({tweets : res.data.data, code: res.data.code }) )
		.catch(err => console.log(err))
	}
	render(){
		const tw = this.state.tweets;
		if(this.state.code === '01'){
            return ( <div className="post"><Loading message={this.state.tweets} /> </div>)
        }
		if(tw) {
			return (
				<React.Fragment>
					{tw.map((tweet, index) => (
						<Post userid={this.props.user.user.userid} tweet={tweet} key={index} />
					))}
				</React.Fragment>
			);
		}
	}
}

export default Posts;