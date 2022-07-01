import React, { useState } from 'react';
import './nav.css';


export default function Nav() {

	const [collapse, setCollapse] = useState("list");
	const [toggleIcon, setToggleIcon] = useState("toggler__icon");

	const onToggle = () => {
		collapse === "list"
		? setCollapse("list list__collapse")
		: setCollapse("list");

    toggleIcon === "toggler__icon"
		? setToggleIcon("toggler__icon toggle")
		: setToggleIcon("toggler__icon");
	};
	return (
		<section className="header">
			<div className="logo">
				<img src="/img/logo.png" alt="" />
			</div>
			<nav className="navbarr">
				<ul className={collapse}>
					<li className="items"><a href="#header">Acceuil</a></li>
					<li className="items"><a href="#about">Présentation</a></li>
					<li className="items"><a href="#engagement">Préstations</a></li>
					<li className="items"><a href="#gallery">Galerie</a></li>
					<li className="items"><a href="#trending">Témoignages</a></li>
				</ul>
			</nav>
			<div className={toggleIcon} onClick={onToggle}>
				<div className="line__1"></div>
				<div className="line__2"></div>
				<div className="line__3"></div>
    		</div>
		</section>
	)
}
