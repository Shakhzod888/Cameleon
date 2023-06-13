import React from "react";
import Menu from "./components/menu/menu";
import Main from "./components/main/main";

export default class App extends React.Component {
	render() {
		return (
			<div className="lele">
				<Menu />
				<Main />
			</div>
		);
	}
}
