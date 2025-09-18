import React from 'react';

const Enroll1: React.FC = () => {
	return (
		<div className="enroll-area pt-80 pb-80">
			<div className="container">
				<div className="col-lg-12">
					<div className="row g-5 align-items-center">
						<div className="col-lg-6">
							<div className="enroll-left wow fadeInLeft" data-wow-delay=".25s">
								<div className="enroll-form">
									<div className="enroll-form-header">
										<h3>Start Your Enrollment</h3>
										<p>We are variations of passages the have suffered.</p>
									</div>
									<form action="#">
										<div className="form-group">
											<input
												type="text"
												name="name"
												className="form-control"
												placeholder="Your Name"
											/>
										</div>
										<div className="form-group">
											<input
												type="email"
												name="email"
												className="form-control"
												placeholder="Email Address"
											/>
										</div>
										<div className="form-group">
											<select className="form-select" name="service">
												<option value="">Choose Course</option>
												<option value="1">Art And Design</option>
												<option value="2">Acting And Drama</option>
												<option value="3">Accounting And Finance</option>
												<option value="4">Biology And Conservation</option>
												<option value="5">Science And Engineering</option>
												<option value="6">Health Administration</option>
											</select>
										</div>
										<div className="form-group">
											<textarea
												name="message"
												className="form-control"
												placeholder="Type Message"
												rows={4}
											></textarea>
										</div>
										<button className="theme-btn">
											Enroll Now<i className="fas fa-arrow-right-long"></i>
										</button>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="enroll-right wow fadeInUp" data-wow-delay=".25s">
								<div className="skill-content">
									<div className="site-heading mb-3">
										<span className="site-title-tagline">
											<i className="far fa-book-open-reader"></i> Our Skills
										</span>
										<h2 className="site-title text-white">
											Explore Your <span>Creativity And Talent</span> With Us
										</h2>
									</div>
									<p className="text-white">
										There are many variations of passages available but the
										majority have suffered alteration in some form by injected
										humour randomised words which don't look even slightly
										believable. If you are going to use passage you need sure
										there anything embarrassing first true generator on the
										Internet.
									</p>
									<div className="skills-section">
										<div className="progress-box">
											<h5>
												Our Students <span className="pull-right">85%</span>
											</h5>
											<div className="progress" data-value="85">
												<div className="progress-bar" role="progressbar"></div>
											</div>
										</div>
										<div className="progress-box">
											<h5>
												Our Teachers <span className="pull-right">65%</span>
											</h5>
											<div className="progress" data-value="65">
												<div className="progress-bar" role="progressbar"></div>
											</div>
										</div>
										<div className="progress-box">
											<h5>
												Our Courses <span className="pull-right">75%</span>
											</h5>
											<div className="progress" data-value="75">
												<div className="progress-bar" role="progressbar"></div>
											</div>
										</div>
									</div>
									<a href="contact.html" className="theme-btn mt-5">
										Learn More<i className="fas fa-arrow-right-long"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Enroll1;
