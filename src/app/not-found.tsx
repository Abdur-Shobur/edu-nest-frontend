import Link from 'next/link';
import RootLayout from './(front-end)/layout';

export default function NotFound() {
	return (
		<RootLayout>
			<main className="main">
				<div className="error-area ">
					<div className="container">
						<div className="col-md-6 mx-auto">
							<div className="error-wrapper">
								<div className="error-img">
									<img src="/assets/img/error/01.png" alt="404 Not Found" />
								</div>
								<h2>Opos... Page Not Found!</h2>
								<p>
									The page you looking for not found may be it not exist or
									removed.
								</p>
								<Link href="/" className="theme-btn">
									Go Back Home <i className="far fa-home"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</RootLayout>
	);
}
