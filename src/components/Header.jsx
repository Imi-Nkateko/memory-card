import "./Style.css";
import logo from "./assets/courage-the-cowardly-dog.svg";
import { useState, useEffect } from "react";

const Header = ({ points }) => {
	const [highScore, setHighScore] = useState(0);

	useEffect(() => {
		setHighScore((prevHighScore) => Math.max(prevHighScore, points));
	
	}, [points]);

	return (
		<header>
			<div className="logo">
				<img src={logo} />
			</div>
			<div className="score-board">
				<h1 className="score">Score: {points}</h1>
				<h3>High Score: {highScore}</h3>
			</div>
		</header>
	);
};

export default Header;
