import React from "react";
import Users from "../dashboard/assets/users.png"
import Swap from "../dashboard/assets/Swap.png"
import "../dashboard/dashboard.scss"


export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="boxes">

				<div className="box active">

					<div className="users">
						<p>Visitors</p>
						<img src={Users} alt="" />
					</div>

					<span className="cost">92,680</span>

					<div className="plus">
						<span>+3,840 (26,80%)</span>
						<img src={Swap} alt="" />
					</div>
				</div>

				<div className="box">

					<div className="users">
						<p>Page views</p>
						<img src={Users} alt="" />
					</div>

					<span className="cost">580.5K</span>

					<div className="plus">
						<span className="dec">+210K (16,20%)</span>
						<img src={Swap} alt="" />
					</div>
				</div>

				<div className="box">

					<div className="users">
						<p>Bounce rates</p>
						<img src={Users} alt="" />
					</div>

					<span className="cost">15.43%</span>

					<div className="plus">
						<span className="inc">-0.74 (0.74%)</span>
						<img src={Swap} alt="" />
					</div>
				</div>

				<p className="all">{"View All >"}</p>
			</div>
		);
	}
}



{/* <div className="boxes">


</div> */}