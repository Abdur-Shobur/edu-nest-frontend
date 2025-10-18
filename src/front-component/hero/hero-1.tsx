import { imageUrlFormat } from '@/lib';
import { ICMSBanner } from '@/store/features/cms';

export default function Hero1({ banner }: { banner: ICMSBanner }) {
	return (
		<div
			className="hero-single"
			style={{
				background: banner?.image
					? `url(${imageUrlFormat(banner.image)})`
					: 'none',
			}}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-12 col-lg-7">
						<div className="hero-content">
							{banner?.title && (
								<h6 className="hero-sub-title">{banner.title}</h6>
							)}
							{banner?.subtitle && (
								<h1 className="hero-title">{banner.subtitle}</h1>
							)}
							{banner?.description && <p>{banner?.description}</p>}
							{(banner?.buttonText_1 || banner?.buttonText_2) && (
								<div className="hero-btn">
									{banner.buttonText_1 && (
										<a href={banner.link_1} className="theme-btn">
											{banner.buttonText_1}
											<i className="fas fa-arrow-right-long"></i>
										</a>
									)}
									{banner.buttonText_2 && (
										<a href={banner.link_2} className="theme-btn theme-btn2">
											{banner.buttonText_2}
											<i className="fas fa-arrow-right-long"></i>
										</a>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
