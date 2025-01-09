import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
	return (
		<>
			<Header />
			<Card cardData={{url: "imgage location", title: "Anime"}}/>
		</>
	);
};

export default App;
