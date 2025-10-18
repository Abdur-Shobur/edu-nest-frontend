import { env } from '@/lib';
import { ICMSPageSections } from '@/store/features/cms';

export default function DesignLayout3({
	section,
}: {
	section: ICMSPageSections;
}) {
	return (
		<div
			className="counter-area pt-80 pb-80"
			style={{
				backgroundImage: `url(${env.baseAPI}/${section.section.image})`,
			}}
		>
			<div className="container">
				<div className="row">
					{section.listItems.map((item) => (
						<div key={item.id} className="col-lg-3 col-sm-6">
							<div className="counter-box">
								{item.image && (
									<div className="icon">
										<img
											src={`${env.baseAPI}/${item.image}`}
											alt={item.title}
										/>
									</div>
								)}
								<div>
									{item.subtitle && (
										<span className="counter">{item.subtitle}</span>
									)}
									{item.title && <h6 className="title"> {item.title} </h6>}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
