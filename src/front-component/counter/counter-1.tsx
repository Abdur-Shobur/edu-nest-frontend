export default function Counter1() {
	return (
		<div className="counter-area pt-60 pb-60">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="counter-box">
							<div className="icon">
								<img src="assets/img/icon/course.svg" alt="" />
							</div>
							<div>
								<span
									className="counter"
									data-count="+"
									data-to="500"
									data-speed="3000"
								>
									500
								</span>
								<h6 className="title">+ Total Cources </h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="counter-box">
							<div className="icon">
								<img src="assets/img/icon/graduation.svg" alt="" />
							</div>
							<div>
								<span
									className="counter"
									data-count="+"
									data-to="1900"
									data-speed="3000"
								>
									1900
								</span>
								<h6 className="title">+ Our Students</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="counter-box">
							<div className="icon">
								<img src="assets/img/icon/teacher-2.svg" alt="" />
							</div>
							<div>
								<span
									className="counter"
									data-count="+"
									data-to="750"
									data-speed="3000"
								>
									750
								</span>
								<h6 className="title">+ Skilled Lecturers</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="counter-box">
							<div className="icon">
								<img src="assets/img/icon/award.svg" alt="" />
							</div>
							<div>
								<span
									className="counter"
									data-count="+"
									data-to="30"
									data-speed="3000"
								>
									30
								</span>
								<h6 className="title">+ Win Awards</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
