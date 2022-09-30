import React from 'react';
import logo from '../assets/icon.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<React.Fragment>
			<aside id="sidebar">
				<div className="sidebar-logo">
					<Link to="">
						<img src={logo} alt="logo" className="img-fluid" />
						<span>Social App</span>
					</Link>
				</div>
				<div className="develop">
					<ul>
						<li><Link to=""><i className="fa fa-home"></i> <span>Home</span></Link></li>
						<li><Link to=""><i className="fa fa-bell"></i> <span> Notifications</span></Link></li>
						<li><Link to=""><i className="fa fa-envelope-o"></i><span>  Messages</span></Link></li>
						<li><Link to=""><i className="fa fa-comment-o"></i><span>  Chat</span></Link></li>
						<li><Link to=""><i className="fa fa-bookmark-o"></i> <span> Bookmarks</span></Link></li>
						<li><Link to=""><i className="fa fa-user"></i><span>  Profile</span></Link></li>
					</ul>
				</div>
			</aside>
		</React.Fragment>
	);
}

export default Sidebar;
