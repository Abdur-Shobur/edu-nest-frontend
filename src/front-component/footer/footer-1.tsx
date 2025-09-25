export default function Footer1() {
	return (
		<footer className="footer-area">
			<div className="footer-shape">
				<img src="assets/img/shape/03.png" alt="" />
			</div>
			<div className="footer-widget">
				<div className="container">
					<div className="row footer-widget-wrapper pt-100 pb-70">
						<div className="col-md-6 col-lg-4">
							<div className="footer-widget-box about-us">
								<a href="#" className="footer-logo">
									<img src="assets/img/logo/logo-light.png" alt="" />
								</a>
								<p className="mb-3">
									We are many variations of passages available but the majority
									have suffered alteration in some form by injected humour words
									believable.
								</p>
								<ul className="footer-contact">
									<li>
										<a href="tel:+21236547898">
											<i className="far fa-phone"></i>+2 123 654 7898
										</a>
									</li>
									<li>
										<i className="far fa-map-marker-alt"></i>25/B Milford Road,
										New York
									</li>
									<li>
										<a href="/cdn-cgi/l/email-protection#bbd2d5ddd4fbdec3dad6cbd7de95d8d4d6">
											<i className="far fa-envelope"></i>
											<span
												className="__cf_email__"
												data-cfemail="4c25222a230c29342d213c2029622f2321"
											>
												[email&#160;protected]
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6 col-lg-2">
							<div className="footer-widget-box list">
								<h4 className="footer-widget-title">Quick Links</h4>
								<ul className="footer-list">
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> About Us
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> FAQ&apos;s
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Testimonials
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Terms Of Service
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Privacy policy
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Update News
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="footer-widget-box list">
								<h4 className="footer-widget-title">Our Campus</h4>
								<ul className="footer-list">
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Campus Safety
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Student Activities
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Academic Department
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Planning &
											Administration
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Office Of The
											Chancellor
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-caret-right"></i> Facility Services
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="footer-widget-box list">
								<h4 className="footer-widget-title">Newsletter</h4>
								<div className="footer-newsletter">
									<p>Subscribe Our Newsletter To Get Latest Update And News</p>
									<div className="subscribe-form">
										<form action="#">
											<input
												type="email"
												className="form-control"
												placeholder="Your Email"
											/>
											<button className="theme-btn" type="submit">
												Subscribe Now <i className="far fa-paper-plane"></i>
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<div className="copyright-wrapper">
						<div className="row">
							<div className="col-md-6 align-self-center">
								<p className="copyright-text">
									&copy; Copyright <span id="date"></span>{' '}
									<a href="#"> Eduka </a> All Rights Reserved.
								</p>
							</div>
							<div className="col-md-6 align-self-center">
								<ul className="footer-social">
									<li>
										<a href="#">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-whatsapp"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-youtube"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
