import React from "react";
import "../main/mainRigth.scss"
import Header from "./header/header";
import Dashboard from "./dashboard/dashboard";
import Statics from "./statistics/statics";
import Links from "./links/links";

export default class Main extends React.Component {
	render() {
		return (
			<div className="MainPage">
				<Header />
				<h1>Dashboard</h1>

				<div className="performance">
					<span className="site">Site performance</span>
					<span className="day">Today vs 7 days ago</span>
				</div>
				<Dashboard/>

				<div className="userStatus">
					<span className="us">Users statistics</span>
					<span className="st">Today’s statistics</span>
				</div>
				<Statics/>
				<div className="topSites">
					<span className="topSt">Top referring sites</span>
					<span className="outLinks">Outbond links that come to your site</span>
				</div>
				<Links/>
			</div>
		);
	}
}
