'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import RootLayout from './layout';

interface ErrorPageProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error('Frontend Application Error:', error);
	}, [error]);

	return (
		<RootLayout>
			<main className="main">
				<div className="error-area">
					<div className="container">
						<div className="col-md-6 mx-auto">
							<div className="error-wrapper">
								<div className="error-img">
									<Image
										src="/assets/img/error/01.png"
										alt="Error"
										width={400}
										height={300}
									/>
								</div>
								<h2>Oops... Something went wrong!</h2>
								<p>
									{error.message ||
										'An unexpected error occurred. Please try again later.'}
								</p>

								{/* Show error details in development */}
								{process.env.NODE_ENV === 'development' && (
									<div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
										<h3 className="text-red-800 font-semibold mb-2">
											Error Details:
										</h3>
										<pre className="text-red-700 text-sm whitespace-pre-wrap">
											{error.stack}
										</pre>
									</div>
								)}

								<div className="d-flex gap-4 justify-content-center mt-6">
									<button
										onClick={reset}
										className="theme-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
									>
										Try Again
									</button>
									<Link href="/" className="theme-btn">
										Go Back Home <i className="far fa-home"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</RootLayout>
	);
}
