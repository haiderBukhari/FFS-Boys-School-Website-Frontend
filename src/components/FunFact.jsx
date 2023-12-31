import React from "react"
import style from "./styles.module.css"
export const FunFact = React.memo(() => {
	return (
		<div id="fun-facts" className={`fun-facts section ${style.overlay} rounded-lg`} style={{ margin: '20px 20px', padding: '60px 10px 60px 40px', borderRadius: '20px', backgroundColor: '#1a76d1' }} >
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className="icofont icofont-home"></i>
							<div className="content">
								<span className="counter">900</span>
								<p>Number of Students</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className="icofont icofont-user-alt-3"></i>
							<div className="content">
								<span className="counter">30</span>
								<p>Number of Teacher</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className="icofont-simple-smile"></i>
							<div className="content">
								<span className="counter">30</span>
								<p>Students to Teacher Ratio</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className="icofont icofont-table"></i>
							<div className="content">
								<span className="counter">32</span>
								<p>Top Acheivers</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
});