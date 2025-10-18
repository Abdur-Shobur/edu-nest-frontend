import { imageUrlFormat } from '@/lib';
import { ICMSPageSections } from '@/store/features/cms';
import Image from 'next/image';

export default function DesignLayout5({
	section,
}: {
	section: ICMSPageSections;
}) {
	return (
		<div className="choose-area pt-80 pb-80">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="choose-content  ">
							<div className="choose-content-info">
								<div className="site-heading mb-0">
									{section.section.title && (
										<span className="site-title-tagline">
											{section.section.title}
										</span>
									)}
									{section.section.subtitle && (
										<h2 className="site-title text-white mb-10">
											{section.section.subtitle}
										</h2>
									)}
									{section.section.description && (
										<p className="text-white">{section.section.description}</p>
									)}
								</div>
								<div className="choose-content-wrap">
									<div className="row g-4">
										{section.listItems.map((item) => (
											<div className="col-md-6" key={item.id}>
												<div className="choose-item">
													<div className="choose-item-icon">
														{item.image && (
															<Image
																width={1000}
																height={1000}
																src={`${imageUrlFormat(item.image)}`}
																alt={item.title}
															/>
														)}
													</div>
													<div className="choose-item-info">
														{item.title && <h4>{item.title}</h4>}
														{item.subtitle && <p>{item.subtitle}</p>}
														{item.description && <p>{item.description}</p>}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="choose-img wow fadeInRight">
							<Image
								width={1000}
								height={1000}
								src={`${imageUrlFormat(section.section.image)}`}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
