import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="error-area">
			<div className="container">
				<div className="col-md-6 mx-auto">
					<div className="error-wrapper">
						<div className="error-img">
							<Image
								src="/assets/img/error/01.png"
								alt="404 Not Found"
								width={400}
								height={300}
							/>
						</div>
						<h2>Opos... Page Not Found!</h2>
						<p>
							The page you looking for not found may be it not exist or removed.
						</p>
						<Link href="/" className="theme-btn">
							Go Back Home <i className="far fa-home"></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
