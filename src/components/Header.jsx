import "./Style.css";
import logo from "./assets/courage-the-cowardly-dog.svg";

const Header = ({ points }) => {




	
	return (
		<header>
			<div className="logo">
				<img src={logo} />
			</div>
			<div className="score-board">
				<h1 className="score">Score: {points}</h1>
			</div>
		</header>
	);
};

export default Header;
