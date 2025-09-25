export default function Video1() {
	return (
		<div className="video-area">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".25s">
                        <div className="site-heading mb-3">
                            <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Latest
                                Video</span>
                            <h2 className="site-title">
                                Let&apos;s Check Our <span>Latest</span> Video
                            </h2>
                        </div>
                        <p className="about-text">
                            There are many variations of passages available but the majority have suffered alteration in
                            some form by injected humour look even slightly believable.
                        </p>
                        <a href="about.html" className="theme-btn mt-30">Learn More<i
                                className="fas fa-arrow-right-long"></i></a>
                    </div>
                    <div className="col-lg-8 wow fadeInRight" data-wow-delay=".25s">
                        <div className="video-content" style={{ backgroundImage: `url('assets/img/video/01.jpg')` }}>
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="video-wrapper">
                                        <a className="play-btn popup-youtube"
                                            href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                            <i className="fas fa-play"></i>
                                        </a>
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
