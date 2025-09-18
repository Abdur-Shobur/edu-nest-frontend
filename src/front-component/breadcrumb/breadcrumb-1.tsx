export default function Breadcrumb1() {
	return (
		<div
			className="site-breadcrumb"
			style={{ background: `url('assets/img/breadcrumb/01.jpg')` }}
		>
			<div className="container">
				<h2 className="breadcrumb-title">Our Courses</h2>
				<ul className="breadcrumb-menu">
					<li>
						<a href="index.html">Home</a>
					</li>
					<li className="active">Our Courses</li>
				</ul>
			</div>
		</div>
	);
}
