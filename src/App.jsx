import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
	return (
		<>
			<Header />
			<div className="cards-display">
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
				<Card cardData={{ url: "imgage location", title: "Anime" }} />
			</div>
		</>
	);
};

export default App;
