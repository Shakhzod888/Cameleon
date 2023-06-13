import React from "react";
import Users from "../dashboard/assets/users.png"
import Swap from "../dashboard/assets/Swap.png"
import "../statistics/statics.scss"

export default class Statics extends React.Component {
	render() {
		return (
			<div className="boxes_2">

				<div className="box_2 dis">

				</div>

				<div className="box_2">

					<div className="users_2">
						<p>New users</p>
						<img src={Users} alt="" />
					</div>

					<span className="cost_2">17,805</span>

					<div className="plus_2">
						<span className="dec">+1,500 (4,17%)</span>
						<img src={Swap} alt="" />
					</div>
				</div>

				<div className="box_2">

					<div className="users_2">
						<p>Online users</p>
						<img src={Users} alt="" />
					</div>

					<span className="cost_2">1,846</span>

					<div className="plus_2">
						<span className="dec">+530 (8,38%)</span>
						<img src={Swap} alt="" />
					</div>
				</div>

				<p className="all">{"View All >"}</p>
			</div>
		);
	}
}
