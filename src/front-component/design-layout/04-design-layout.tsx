import { imageUrlFormat } from '@/lib';
import { ICMSPageSections } from '@/store/features/cms';

export default function DesignLayout4({
	section,
}: {
	section: ICMSPageSections;
}) {
	return (
		<div className="video-area pt-80 pb-80">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-4 wow fadeInLeft">
						<div className="site-heading mb-3">
							{section.section.title && (
								<span className="site-title-tagline">
									{section.section.title}
								</span>
							)}
							{section.section.subtitle && (
								<h2 className="site-title">{section.section.subtitle}</h2>
							)}
							{section.section.description && (
								<p className="about-text">{section.section.description}</p>
							)}
						</div>
						{section.section.link && section.section.linkText && (
							<a href={section.section.link} className="theme-btn mt-30">
								{section.section.linkText}
								<i className="fas fa-arrow-right-long"></i>
							</a>
						)}
					</div>
					<div className="col-lg-8 wow fadeInRight">
						<div
							className="video-content"
							style={{
								backgroundImage: `url(${imageUrlFormat(
									section.section.image
								)})`,
							}}
						>
							<div className="row align-items-center">
								<div className="col-lg-12">
									<div className="video-wrapper">
										<a
											className="play-btn popup-youtube"
											href={section.section.link}
										>
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
