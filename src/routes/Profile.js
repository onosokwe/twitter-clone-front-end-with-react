import React from 'react';
import Sidebar from '../views/Sidebar';
import Tweet from '../views/Tweet';
import Posts from '../views/Posts';
import Pagebar from '../views/Pagebar';
import {userContext} from '../config/context';

const Profile = (user) => {
    return (
        <userContext.Consumer>
        { (user) =>
			<React.Fragment>
				<Sidebar />
				<main id="dashboard">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-8">
								<div id="midsection">
									<Pagebar />
									{user
										? <Tweet user={user} />
										: null
									}
									<Posts user={user} />
								</div>
							</div>
						</div>
					</div>
				</main>			
	        </React.Fragment>
        }
        </userContext.Consumer>
    )
}

export default Profile;
