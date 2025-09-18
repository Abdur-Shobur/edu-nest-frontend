export default function Video2() {
	return (
		<div className="video-area">
			<div className="container">
				<div
					className="video-content"
					style={{ backgroundImage: `url('assets/img/video/01.jpg')` }}
				>
					<div className="row align-items-center">
						<div className="col-lg-12">
							<div className="video-wrapper">
								<a
									className="play-btn popup-youtube"
									href="https://www.youtube.com/watch?v=ckHzmP1evNU"
								>
									<i className="fas fa-play"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
