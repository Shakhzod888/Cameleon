import React from "react";
import MessageImg from "../menuPart/assets/Message.png";
import Category from "../menuPart/assets/Category.png" 
import Paper from "../menuPart/assets/Paper.png"
import Notification from "../menuPart/assets/Notification.png"
import Wallet from "../menuPart/assets/Wallet.png"
import BookMarket from "../menuPart/assets/Bookmark.png"
import Confirance from "../menuPart/assets/Video.png"
import Settings from "../menuPart/assets/Setting.png"
import Info from "../menuPart/assets/Info Square.png"

import "./menuPart.scss"

function MenuList({imges,text}) {
    return <div className="list">
        <img src={imges} alt="" />
        <span>{text}</span>
    </div>
}

export default class MenuPart extends React.Component {
	render() {
		return (
			<>
				<div className="listes">
                    <MenuList imges={Category} text={"Dashboard"}/>
                    <MenuList imges={MessageImg} text={"Messages"}/>
                    <MenuList imges={Paper} text={"Reports"}/>
                    <MenuList imges={Notification} text={"Notifications"}/>
                    <MenuList imges={Wallet} text={"Invoices"}/>
                </div>
			</>
		);
	}
}

export class Works extends React.Component {
    render() {
        return (
            <>
                <div className="listes">
                    <MenuList imges={BookMarket} text={"Bookmarks"}/>
                    <MenuList imges={Confirance} text={"Conferences"}/>
                </div>
            </>
        )
    }
}

export class Options extends React.Component {
    render() {
        return (
            <>
                <div className="listes">
                    <MenuList imges={Settings} text={"Settings"}/>
                    <MenuList imges={Info} text={"About"}/>
                </div>
            </>
        )
    }
}
