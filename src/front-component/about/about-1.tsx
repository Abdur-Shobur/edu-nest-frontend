export default function About1() {
	return (
		<div className="about-area py-120">
			<div className="container">
				<div className="row g-4 align-items-center">
					<div className="col-lg-6">
						<div className="about-left wow fadeInLeft" data-wow-delay=".25s">
							<div className="about-img">
								<div className="row g-4">
									<div className="col-md-6">
										<img
											className="img-1"
											src="assets/img/about/01.jpg"
											alt=""
										/>
										<div className="about-experience mt-4">
											<div className="about-experience-icon">
												<img src="assets/img/icon/exchange-idea.svg" alt="" />
											</div>
											<b className="text-start">
												30 Years Of <br /> Quality Service
											</b>
										</div>
									</div>
									<div className="col-md-6">
										<img
											className="img-2"
											src="assets/img/about/02.jpg"
											alt=""
										/>
										<img
											className="img-3 mt-4"
											src="assets/img/about/03.jpg"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about-right wow fadeInRight" data-wow-delay=".25s">
							<div className="site-heading mb-3">
								<span className="site-title-tagline">
									<i className="far fa-book-open-reader"></i> About Us
								</span>
								<h2 className="site-title">
									Our Edukation System <span>Inspires</span> You More.
								</h2>
							</div>
							<p className="about-text">
								There are many variations of passages available but the majority
								have suffered alteration in some form by injected humour
								randomised words which don't look even slightly believable. If
								you are going to use passage.
							</p>
							<div className="about-content">
								<div className="row">
									<div className="col-md-7">
										<div className="about-item">
											<div className="about-item-icon">
												<img src="assets/img/icon/open-book.svg" alt="" />
											</div>
											<div className="about-item-content">
												<h5>Edukation Services</h5>
												<p>
													It is a long established fact that reader will to
													using content.
												</p>
											</div>
										</div>
										<div className="about-item">
											<div className="about-item-icon">
												<img
													src="assets/img/icon/global-education.svg"
													alt=""
												/>
											</div>
											<div className="about-item-content">
												<h5>International Hubs</h5>
												<p>
													It is a long established fact that reader will to
													using content.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-5">
										<div className="about-quote">
											<p>
												It is a long established fact that a reader will be
												distracted by the content of a page when looking at its
												reader for the long words layout.
											</p>
											<i className="far fa-quote-right"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="about-bottom">
								<a href="about.html" className="theme-btn">
									Discover More<i className="fas fa-arrow-right-long"></i>
								</a>
								<div className="about-phone">
									<div className="icon">
										<i className="fal fa-headset"></i>
									</div>
									<div className="number">
										<span>Call Now</span>
										<h6>
											<a href="tel:+21236547898">+2 123 654 7898</a>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
