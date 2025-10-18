import { imageUrlFormat } from '@/lib';
import { ICMSPageSections } from '@/store/features/cms';
import Link from 'next/link';

export default function DesignLayout6({
	section,
}: {
	section: ICMSPageSections;
}) {
	return (
		<div
			className="cta-area pt-120 pb-80"
			style={{
				backgroundImage: section.section.image
					? `url(${imageUrlFormat(section.section.image)})`
					: 'none',
			}}
		>
			<div className="container">
				<div className="cta-wrapper">
					<div className="row align-items-center">
						<div className="col-lg-5 ms-lg-auto">
							<div className="cta-content">
								{section.section.title && <h1>{section.section.title}</h1>}
								{section.section.subtitle && <p>{section.section.subtitle}</p>}
								{section.section.link && section.section.linkText && (
									<div className="cta-btn">
										<Link href={section.section.link} className="theme-btn">
											{section.section.linkText}
											<i className="fas fa-arrow-right-long"></i>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
