import React from 'react';
import admin from '../assets/admin.jpg';

const WhoToFollow = () => {
	return (
		<React.Fragment>
			<div className="box">
				<div className="box_img">
					<img src={admin} alt="admin" className="img-fluid" />
				</div>
				<div className="box_body">
					<button className="btn btn-sm">Follow</button>
					<h4>The Professor</h4>
					<p>@onosokwe</p>
				</div>
			</div>
			<div className="box">
				<div className="box_img">
					<img src={admin} alt="admin" className="img-fluid" />
				</div>
				<div className="box_body">
					<button className="btn btn-sm">Follow</button>
					<h4>Unicodeveloper</h4>
					<p>@unicodeveloper</p>
				</div>
			</div>
		</React.Fragment>
	);
}

export default WhoToFollow;