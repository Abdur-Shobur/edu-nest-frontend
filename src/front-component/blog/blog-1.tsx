import React from 'react';

const Blog1: React.FC = () => {
	return (
		<div className="blog-area py-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 mx-auto">
						<div className="site-heading text-center">
							<span className="site-title-tagline">
								<i className="far fa-book-open-reader"></i> Our Blog
							</span>
							<h2 className="site-title">
								Latest News & <span>Blog</span>
							</h2>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-lg-4">
						<div className="blog-item  ">
							<div className="blog-date">
								<i className="fal fa-calendar-alt"></i> June 18, 2024
							</div>
							<div className="blog-item-img">
								<img src="assets/img/blog/01.jpg" alt="Thumb" />
							</div>
							<div className="blog-item-info">
								<div className="blog-item-meta">
									<ul>
										<li>
											<a href="#">
												<i className="far fa-user-circle"></i> By Alicia Davis
											</a>
										</li>
										<li>
											<a href="#">
												<i className="far fa-comments"></i> 03 Comments
											</a>
										</li>
									</ul>
								</div>
								<h4 className="blog-title">
									<a href="blog-single.html">
										There are many variations passage have suffered available.
									</a>
								</h4>
								<a className="theme-btn" href="blog-single.html">
									Read More<i className="fas fa-arrow-right-long"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="blog-item  ">
							<div className="blog-date">
								<i className="fal fa-calendar-alt"></i> June 18, 2024
							</div>
							<div className="blog-item-img">
								<img src="assets/img/blog/02.jpg" alt="Thumb" />
							</div>
							<div className="blog-item-info">
								<div className="blog-item-meta">
									<ul>
										<li>
											<a href="#">
												<i className="far fa-user-circle"></i> By Alicia Davis
											</a>
										</li>
										<li>
											<a href="#">
												<i className="far fa-comments"></i> 03 Comments
											</a>
										</li>
									</ul>
								</div>
								<h4 className="blog-title">
									<a href="blog-single.html">
										There are many variations passage have suffered available.
									</a>
								</h4>
								<a className="theme-btn" href="blog-single.html">
									Read More<i className="fas fa-arrow-right-long"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="blog-item  ">
							<div className="blog-date">
								<i className="fal fa-calendar-alt"></i> June 18, 2024
							</div>
							<div className="blog-item-img">
								<img src="assets/img/blog/03.jpg" alt="Thumb" />
							</div>
							<div className="blog-item-info">
								<div className="blog-item-meta">
									<ul>
										<li>
											<a href="#">
												<i className="far fa-user-circle"></i> By Alicia Davis
											</a>
										</li>
										<li>
											<a href="#">
												<i className="far fa-comments"></i> 03 Comments
											</a>
										</li>
									</ul>
								</div>
								<h4 className="blog-title">
									<a href="blog-single.html">
										There are many variations passage have suffered available.
									</a>
								</h4>
								<a className="theme-btn" href="blog-single.html">
									Read More<i className="fas fa-arrow-right-long"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog1;
