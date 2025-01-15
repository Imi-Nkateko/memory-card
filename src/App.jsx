import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import {  useState } from "react";


const App = () => {

const [points, setPoints] = useState(0)


	return (
		<>
			<Header points={points} />
			<Cards points={points} setPoints={setPoints} />
		</>
	);
};

export default App;
