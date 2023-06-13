import React from "react";
import Logo from "../assets/logo.png"
import "../menu/menu.scss"
import MenuPart, { Options, Works } from "./menuPart/menuPart";

export default class Menu extends React.Component {
	render() {
		return (
			<>
				<div className="wrapper">

					<img src={Logo} alt="" />
					<p className="mainMenu">MAIN MENU</p>
					<MenuPart/>
					<div className="line">
						<p>---------------------</p>
					</div>
					<span className="works">WORKS</span>
					<Works/>
					<div className="line">
						<p>---------------------</p>
					</div>

					<span className="works">OPTIONS</span>

					<Options/>
				</div>
			</>
		);
	}
}
