import { imageUrlFormat } from '@/lib';
import { ICMSPageSections } from '@/store/features/cms';
import Image from 'next/image';

export default function DesignLayout2({
	section,
}: {
	section: ICMSPageSections;
}) {
	return (
		<div className="about-area pt-80 pb-80">
			<div className="container">
				<div className="row g-4 align-items-center">
					<div className="col-lg-6">
						<div className="about-left">
							<div className="about-img">
								{section.section.image && (
									<Image
										width={1000}
										height={1000}
										className="img-3 w-100"
										src={`${imageUrlFormat(section.section.image)}`}
										alt={section.section.title}
									/>
								)}
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about-right">
							<div className="site-heading mb-3">
								{section.section.title && (
									<span className="site-title-tagline">
										{section.section.title}
									</span>
								)}
								{section.section.subtitle && (
									<h2 className="site-title">{section.section.subtitle}</h2>
								)}
							</div>
							{section.section.description && (
								<p className="about-text">{section.section.description}</p>
							)}
							{section.listItems.length > 0 && (
								<div
									className="about-content"
									style={{
										borderBottom: section.section.link
											? '1px solid var(--border-info-color)'
											: 'none',
									}}
								>
									<div className="row">
										{section.listItems.map((item) => (
											<div key={item.id} className="col-md-6">
												<div className="about-item">
													<div className="about-item-icon">
														{item.image && (
															<Image
																width={1000}
																height={1000}
																src={`${imageUrlFormat(item.image)}`}
																alt={item.title}
															/>
														)}
													</div>
													<div className="about-item-content">
														{item.title && <h5>{item.title}</h5>}
														{item.subtitle && <p>{item.subtitle}</p>}
														{item.description && <p>{item.description}</p>}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
							{section.section.linkText && (
								<div className="about-bottom">
									<a href={section.section.link} className="theme-btn">
										{section.section.linkText}
										<i className="fas fa-arrow-right-long"></i>
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
