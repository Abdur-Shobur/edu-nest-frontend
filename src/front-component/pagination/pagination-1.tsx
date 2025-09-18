export default function Pagination1() {
	return (
		<div className="pagination-area">
			<div aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<a className="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">
								<i className="far fa-arrow-left"></i>
							</span>
						</a>
					</li>
					<li className="page-item active">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">
								<i className="far fa-arrow-right"></i>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
