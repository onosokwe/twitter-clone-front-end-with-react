import React from 'react';
import Sidebar from '../views/Sidebar';
import Tweet from '../views/Tweet';
import Posts from '../views/Posts';
import Pagebar from '../views/Pagebar';
import Rightsection from '../views/Rightsection';
import Chat from '../views/Chat';
import {userContext} from '../config/context';

const Home = (user) => {
    return (
        <userContext.Consumer>
        { (user) =>
			<React.Fragment>
				<Sidebar />
				<main id="dashboard">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-8 col-lg-8 col-md-6 col-sm-6">
								<div id="midsection">
									<Pagebar />
									{user
										? <Tweet user={user} />
										: null
									}
									<Posts user={user} />
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
								<div id="rightsection">
									<Rightsection />
									<Chat />
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

export default Home;
