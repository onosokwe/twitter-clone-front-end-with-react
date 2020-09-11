import React from 'react';
import admin from '../assets/admin.jpg';
import { Link } from 'react-router-dom';

const Chat = () => {
	return (
		<React.Fragment>			
			<div className="chat reduced">
				<h1>Chat</h1>
				<div className="chats">
					<Link to="">
						<div className="box">
							<div className="box_img">
								<img src={admin} alt="admin" className="img-fluid" />
							</div>
							<div className="box_body">
								<p className="float-right">Aug 12</p>
								<h4>Javascript</h4>
								<p>@js_myguy</p>
							</div>
						</div>
					</Link>
					<Link to="">
						<div className="box">
							<div className="box_img">
								<img src={admin} alt="admin" className="img-fluid" />
							</div>
							<div className="box_body">
								<p className="float-right">Aug 12</p>
								<h4>Javascript</h4>
								<p>@js_myguy</p>
							</div>
						</div>
					</Link>
					<Link to="">
						<div className="box">
							<div className="box_img">
								<img src={admin} alt="admin" className="img-fluid" />
							</div>
							<div className="box_body">
								<p className="float-right">Aug 12</p>
								<h4>Javascript</h4>
								<p>@js_myguy</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Chat;