import Link from 'next/link';

export default function Header1() {
	return (
		<header className="header">
			{/* <!-- header top --> */}
			<div className="header-top">
				<div className="container">
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
										<a href="/cdn-cgi/l/email-protection#9bf2f5fdf4dbfee3faf6ebf7feb5f8f4f6">
											<i className="far fa-envelopes"></i>{' '}
											<span
												className="__cf_email__"
												data-cfemail="d1b8bfb7be91b4a9b0bca1bdb4ffb2bebc"
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
						<Link className="navbar-brand" href="/">
							<img src="assets/img/logo/logo.png" alt="logo" />
						</Link>
						<div className="mobile-menu-right">
							<div className="search-btn">
								<button
									type="button"
									className="nav-right-link search-box-outer"
								>
									<i className="far fa-search"></i>
								</button>
							</div>
							<button className="navbar-toggler" type="button">
								<span className="navbar-toggler-mobile-icon">
									<i className="far fa-bars"></i>
								</span>
							</button>
						</div>
						<div className="navbar-collapse justify-content-end">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" href="/auth">
										Login
									</Link>
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
