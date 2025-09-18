export default function Header2() {
	return (
		<header className="header">
			{/* <!-- header top --> */}
			<div className="header-top">
				<div className="container ps-0">
					<div className="header-top-wrap">
						<div className="header-top-left">
							<div className="header-top-social">
								<span>Follow Us: </span>
								<a href="#">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
								<a href="#">
									<i className="fab fa-youtube"></i>
								</a>
								<a href="#">
									<i className="fab fa-whatsapp"></i>
								</a>
							</div>
						</div>
						<div className="header-top-right">
							<div className="header-top-contact">
								<ul>
									<li>
										<a href="#">
											<i className="far fa-location-dot"></i> 25/B Milford Road,
											New York
										</a>
									</li>
									<li>
										<a href="/cdn-cgi/l/email-protection#432a2d252c03263b222e332f266d202c2e">
											<i className="far fa-envelopes"></i>{' '}
											<span
												className="__cf_email__"
												data-cfemail="89e0e7efe6c9ecf1e8e4f9e5eca7eae6e4"
											>
												[email&#160;protected]
											</span>
										</a>
									</li>
									<li>
										<a href="tel:+21236547898">
											<i className="far fa-phone-volume"></i> +2 123 654 7898
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="main-navigation">
				<nav className="navbar navbar-expand-lg">
					<div className="container position-relative">
						<a className="navbar-brand" href="index.html">
							<img src="assets/img/logo/logo.png" alt="logo" />
						</a>
						<div className="mobile-menu-right">
							<div className="search-btn">
								<button
									type="button"
									className="nav-right-link search-box-outer"
								>
									<i className="far fa-search"></i>
								</button>
							</div>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#main_nav"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-mobile-icon">
									<i className="far fa-bars"></i>
								</span>
							</button>
						</div>
						<div className="collapse navbar-collapse" id="main_nav">
							<ul className="navbar-nav">
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle active"
										href="#"
										data-bs-toggle="dropdown"
									>
										Home
									</a>
									<ul className="dropdown-menu fade-down">
										<li>
											<a className="dropdown-item" href="index.html">
												Home Page 01
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="index-2.html">
												Home Page 02
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="index-3.html">
												Home Page 03
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										data-bs-toggle="dropdown"
									>
										Courses
									</a>
									<ul className="dropdown-menu fade-down">
										<li>
											<a className="dropdown-item" href="course.html">
												Courses One
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="course-2.html">
												Courses Two
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="course-single.html">
												Course Single One
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="course-single-2.html">
												Course Single Two
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item mega-menu dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										data-bs-toggle="dropdown"
									>
										Academics
									</a>
									<div className="dropdown-menu fade-down">
										<div className="mega-content">
											<div className="container-fluid">
												<div className="row">
													<div className="col-12 col-sm-4 col-md-3">
														<h5>About Us</h5>
														<div className="menu-about">
															<a href="#" className="menu-about-logo">
																<img src="assets/img/logo/logo.png" alt="" />
															</a>
															<p>
																We are many variations of passages available but
																the majority have suffered alteration in some
																form by injected humour words injected humour
																believable.
															</p>
														</div>
													</div>
													<div className="col-12 col-sm-4 col-md-3">
														<h5>Undergraduate</h5>
														<ul className="mega-menu-item">
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Art And Design
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Acting And Drama
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Accounting And Finance
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Biology And Conservation
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Science And Engineering
																</a>
															</li>
														</ul>
													</div>
													<div className="col-12 col-sm-4 col-md-3">
														<h5>Graduate Program</h5>
														<ul className="mega-menu-item">
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Software Systems
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Human Resource
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Health Administration
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Biochemistry
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Computer Science
																</a>
															</li>
														</ul>
													</div>
													<div className="col-12 col-sm-12 col-md-3">
														<h5>Resources</h5>
														<ul className="mega-menu-item">
															<li>
																<a
																	className="dropdown-item"
																	href="academic.html"
																>
																	Academics Department
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="academic-single.html"
																>
																	Academic Department Single
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="faculty.html"
																>
																	Our Faculty
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="faculty-single.html"
																>
																	Faculty Single
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item"
																	href="contact.html"
																>
																	Contact With Us
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										data-bs-toggle="dropdown"
									>
										Pages
									</a>
									<ul className="dropdown-menu fade-down">
										<li>
											<a className="dropdown-item" href="about.html">
												About Us
											</a>
										</li>
										<li className="dropdown-submenu">
											<a className="dropdown-item dropdown-toggle" href="#">
												Events
											</a>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="event.html">
														Events
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="event-single.html">
														Event Single
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu">
											<a className="dropdown-item dropdown-toggle" href="#">
												Portfolio
											</a>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="portfolio.html">
														Portfolio
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="portfolio-single.html"
													>
														Portfolio Single
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu">
											<a className="dropdown-item dropdown-toggle" href="#">
												Teachers
											</a>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="teacher.html">
														Teachers One
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="teacher-2.html">
														Teachers Two
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="teacher-single.html"
													>
														Teachers Single
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a className="dropdown-item" href="gallery.html">
												Gallery
											</a>
										</li>
										<li className="dropdown-submenu">
											<a className="dropdown-item dropdown-toggle" href="#">
												Authentication
											</a>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="login.html">
														Login
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="register.html">
														Register
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="forgot-password.html"
													>
														Forgot Password
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a className="dropdown-item" href="pricing.html">
												Pricing Plan
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="faq.html">
												Faq
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="testimonial.html">
												Testimonials
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="404.html">
												404 Error
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="coming-soon.html">
												Coming Soon
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="terms.html">
												Terms Of Service
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="privacy.html">
												Privacy Policy
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										data-bs-toggle="dropdown"
									>
										Admissions
									</a>
									<ul className="dropdown-menu fade-down">
										<li>
											<a className="dropdown-item" href="how-to-apply.html">
												How To Apply
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="application-form.html">
												Application Form
											</a>
										</li>
										<li className="dropdown-submenu">
											<a className="dropdown-item dropdown-toggle" href="#">
												Our Campus
											</a>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="campus-tour.html">
														Campus Tour
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="campus-life.html">
														Campus Life
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="notice-board.html">
														Notice Board
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="student-activities.html"
													>
														Student Activities
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu">
											<a className="dropdown-item dropdown-toggle" href="#">
												Our Facilities
											</a>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="facility.html">
														Facilities
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="facility-single.html"
													>
														Facility Single
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu">
											<a className="dropdown-item dropdown-toggle" href="#">
												Our Research
											</a>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="research.html">
														Research
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="research-single.html"
													>
														Research Single
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu">
											<a className="dropdown-item dropdown-toggle" href="#">
												Our Clubs
											</a>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="club.html">
														Our Clubs
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="club-single.html">
														Club Single
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a className="dropdown-item" href="tuition-fee.html">
												Tuition Fees
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="alumni.html">
												Alumni
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="scholarship.html">
												Scholarships
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="our-fund.html">
												Our Fund
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="athletics.html">
												Athletics
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="health-care.html">
												Health Care
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										data-bs-toggle="dropdown"
									>
										Blog
									</a>
									<ul className="dropdown-menu fade-down">
										<li>
											<a className="dropdown-item" href="blog.html">
												Blog
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="blog-single.html">
												Blog Single
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="contact.html">
										Contact
									</a>
								</li>
							</ul>
							<div className="nav-right">
								<div className="search-btn">
									<button
										type="button"
										className="nav-right-link search-box-outer"
									>
										<i className="far fa-search"></i>
									</button>
								</div>
								<div className="nav-right-btn mt-2">
									<a href="application-form.html" className="theme-btn">
										<span className="fal fa-pencil"></span>Apply Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
