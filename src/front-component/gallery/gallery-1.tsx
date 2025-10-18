import React from 'react';

const Gallery1: React.FC = () => {
	return (
		<div className="gallery-area py-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 mx-auto">
						<div className="site-heading text-center">
							<span className="site-title-tagline">
								<i className="far fa-book-open-reader"></i> Gallery
							</span>
							<h2 className="site-title">
								Our Photo <span>Gallery</span>
							</h2>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
							</p>
						</div>
					</div>
				</div>
				<div className="row popup-gallery">
					<div className="col-md-4  ">
						<div className="gallery-item">
							<div className="gallery-img">
								<img src="assets/img/gallery/01.jpg" alt="" />
							</div>
							<div className="gallery-content">
								<a
									className="popup-img gallery-link"
									href="assets/img/gallery/01.jpg"
								>
									<i className="fal fa-plus"></i>
								</a>
							</div>
						</div>
						<div className="gallery-item">
							<div className="gallery-img">
								<img src="assets/img/gallery/02.jpg" alt="" />
							</div>
							<div className="gallery-content">
								<a
									className="popup-img gallery-link"
									href="assets/img/gallery/02.jpg"
								>
									<i className="fal fa-plus"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4  ">
						<div className="gallery-item">
							<div className="gallery-img">
								<img src="assets/img/gallery/03.jpg" alt="" />
							</div>
							<div className="gallery-content">
								<a
									className="popup-img gallery-link"
									href="assets/img/gallery/03.jpg"
								>
									<i className="fal fa-plus"></i>
								</a>
							</div>
						</div>
						<div className="gallery-item">
							<div className="gallery-img">
								<img src="assets/img/gallery/04.jpg" alt="" />
							</div>
							<div className="gallery-content">
								<a
									className="popup-img gallery-link"
									href="assets/img/gallery/04.jpg"
								>
									<i className="fal fa-plus"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4  ">
						<div className="gallery-item">
							<div className="gallery-img">
								<img src="assets/img/gallery/05.jpg" alt="" />
							</div>
							<div className="gallery-content">
								<a
									className="popup-img gallery-link"
									href="assets/img/gallery/05.jpg"
								>
									<i className="fal fa-plus"></i>
								</a>
							</div>
						</div>
						<div className="gallery-item">
							<div className="gallery-img">
								<img src="assets/img/gallery/06.jpg" alt="" />
							</div>
							<div className="gallery-content">
								<a
									className="popup-img gallery-link"
									href="assets/img/gallery/06.jpg"
								>
									<i className="fal fa-plus"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery1;
