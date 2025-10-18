import { imageUrlFormat } from '@/lib';
import { ICMSListItems } from '@/store/features/cms';
import Image from 'next/image';

export default function DesignLayout1({
	section,
}: {
	section: ICMSListItems[];
}) {
	return (
		<div className="feature-area pt-80 pb-80">
			<div className="container">
				<div className="row g-4">
					{section?.map((item, index) => (
						<div className="col-md-6 col-lg-3" key={item.id}>
							<div className="feature-item  ">
								<span className="count">{`${index + 1}`.padStart(2, '0')}</span>
								<div className="feature-icon">
									{item.image && (
										<Image
											width={1000}
											height={1000}
											src={`${imageUrlFormat(item.image)}`}
											alt={item.title}
										/>
									)}
								</div>
								<div className="feature-content">
									{item.title && (
										<h4 className="feature-title">{item.title}</h4>
									)}
									{item.subtitle && <p>{item.subtitle}</p>}
									{item.description && <p>{item.description}</p>}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
