import React from 'react';

const Choose1: React.FC = () => {
	return (
		<div className="choose-area pt-80 pb-80">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="choose-content  ">
							<div className="choose-content-info">
								<div className="site-heading mb-0">
									<span className="site-title-tagline">
										<i className="far fa-book-open-reader"></i> Why Choose Us
									</span>
									<h2 className="site-title text-white mb-10">
										We Are Expert & <span>Do Our Best</span> For Your Goal
									</h2>
									<p className="text-white">
										It is a long established fact that a reader will be
										distracted by the readable content of a page when many
										desktop and web page editors looking at its layout.
									</p>
								</div>
								<div className="choose-content-wrap">
									<div className="row g-4">
										<div className="col-md-6">
											<div className="choose-item">
												<div className="choose-item-icon">
													<img src="assets/img/icon/teacher-2.svg" alt="" />
												</div>
												<div className="choose-item-info">
													<h4>Expert Teachers</h4>
													<p>There are many variation of the suffered.</p>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="choose-item">
												<div className="choose-item-icon">
													<img
														src="assets/img/icon/course-material.svg"
														alt=""
													/>
												</div>
												<div className="choose-item-info">
													<h4>Courses Material</h4>
													<p>There are many variation of the suffered.</p>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="choose-item">
												<div className="choose-item-icon">
													<img src="assets/img/icon/online-course.svg" alt="" />
												</div>
												<div className="choose-item-info">
													<h4>Online Courses</h4>
													<p>There are many variation of the suffered.</p>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="choose-item">
												<div className="choose-item-icon">
													<img src="assets/img/icon/money.svg" alt="" />
												</div>
												<div className="choose-item-info">
													<h4>Affordable Price</h4>
													<p>There are many variation of the suffered.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="choose-img wow fadeInRight">
							<img src="assets/img/choose/01.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Choose1;
