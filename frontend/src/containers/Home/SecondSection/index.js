import React from 'react';
import easySetup from '../Assets/easysetup.png';
import advanceSecurity from '../Assets/AdvanceSecurity.png';
import allInOn from '../Assets/Allinonesolution.png';
import support from '../Assets/support.png';
import './style.css';

export default class Products extends React.Component {
	render() {
		return (
			<div id="Second-Section">
				<div className="Custom-Wrapper2">
					<div className="container">
						<div className="row">
							<div className="col-md-3">
								<div className="services-section text-center">
									<img src={easySetup} alt="easysetup" className="img-fluid" />
									<h6>Easy Setup</h6>
									<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,{' '}
									</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="services-section text-center">
									<img
										src={advanceSecurity}
										alt="easysetup"
										className="img-fluid"
									/>
									<h6>Advance Security</h6>
									<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,{' '}
									</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="services-section text-center">
									<img src={allInOn} alt="easysetup" className="img-fluid" />
									<h6>All-in-One Soloution</h6>
									<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,{' '}
									</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="services-section text-center">
									<img src={support} alt="easysetup" className="img-fluid" />
									<h6>24/7 Support</h6>
									<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
