import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import {  useState } from "react";


const App = () => {

const [points, setPoints] = useState(0)


	return (
		<>
			<Header points={points} />
			<p>
				Get points by clicking on an image but don't click on any more than
				once!
			</p>
			<Cards points={points} setPoints={setPoints} />
		</>
	);
};

export default App;
