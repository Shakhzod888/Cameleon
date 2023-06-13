import React from "react";
import People from "../header/assets/people.png"
import "../header/header.scss"

export default class Header extends React.Component {
	render() {
		return (
			<>
            <div className="header">

				<div className="inp">
					<input type="text" placeholder="Search..." />
				</div>

				<div className="links">
					<ul>
						<li>Analytics</li>
						<li>Earnings</li>
						<li>Ads Experiments</li>
					</ul>
				</div>
				
				<div className="account">
					<img src={People} alt="" />
					<div>
						<span>Welcome</span>
						<p>Daniel Estasmos</p>
					</div>
				</div>

            </div>
            </>
		);
	}
}