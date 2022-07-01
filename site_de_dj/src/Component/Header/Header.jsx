import React, { useState } from 'react';
import {  useSpring, animated } from 'react-spring';
import { Waypoint } from "react-waypoint";
import './header.css';

export default function Header() {

	const [toggleTxt, setToggleTxt] = useState(false);

	const animation = useSpring({
		opacity: toggleTxt ? 1 : 0,
		transform: toggleTxt ? "translateX(5)" : "translateX(-50%)",
	});


	return (
		<section className="intro">
			<Waypoint
				bottomOffset='30%'
				onEnter={() => {
					if (!toggleTxt) {
						setToggleTxt(true);
					}
				}}
			/>
			<animated.div style={animation} className="center">
			<h1 className="title">Préstations Dj - Lumières - Ambiance - Évenementielles </h1>
			<h2 className="accroche">Spécialiste du mariage oriental</h2>
			</animated.div>
		</section>
	)
}
