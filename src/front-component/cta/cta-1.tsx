import React from 'react';

const Cta1: React.FC = () => {
	return (
		<div className="cta-area">
			<div className="container">
				<div className="cta-wrapper">
					<div className="row align-items-center">
						<div className="col-lg-5 ms-lg-auto">
							<div className="cta-content">
								<h1>Our 20% Offer Running - Join Today For Your Course</h1>
								<p>
									There are many variations of passages available but the
									majority have suffered alteration in some form by injected
									humour randomised words which don&apos;t look even slightly
									believable.
								</p>
								<div className="cta-btn">
									<a href="application-form.html" className="theme-btn">
										Apply Now<i className="fas fa-arrow-right-long"></i>
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

export default Cta1;
