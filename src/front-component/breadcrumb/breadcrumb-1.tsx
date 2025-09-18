import Link from 'next/link';

type BreadcrumbItem = {
	label: string;
	href?: string;
};

type Breadcrumb1Props = {
	title: string;
	backgroundUrl?: string;
	items?: BreadcrumbItem[];
};

export default function Breadcrumb1({
	title,
	backgroundUrl = 'assets/img/breadcrumb/01.jpg',
	items,
}: Breadcrumb1Props) {
	return (
		<div
			className="site-breadcrumb"
			style={{ background: `url('${backgroundUrl}')` }}
		>
			<div className="container">
				<h2 className="breadcrumb-title">{title}</h2>
				<ul className="breadcrumb-menu">
					{items && items.length > 0 ? (
						items.map((item, index) => (
							<li
								key={`${item.label}-${index}`}
								className={!item.href ? 'active' : undefined}
							>
								{item.href ? (
									<Link href={item.href}>{item.label}</Link>
								) : (
									item.label
								)}
							</li>
						))
					) : (
						<>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li className="active">{title}</li>
						</>
					)}
				</ul>
			</div>
		</div>
	);
}
