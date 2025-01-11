import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
// import { useState } from "react";

const App = () => {

	// const [getScore, setGetScore] = useState(0);

	// function handleClick() {
	// 	setGetScore(1)
	// }
const cards = [
	{id:1, title: "Tom and Jerry", url: "image"},
	{id:2, title: "Aladin", url: "image"},
	{id:3, title: "Micky Mouse", url: "image"},
	{id:4, title: "Shrek", url: "image"},
]

const shuffleCards =(cardsArr) => {
	for (let i = cardsArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
	}
	return cardsArr
}

const getShuffledCards = shuffleCards(cards)

const cardsComponet = getShuffledCards.map((card) => {
	return <Card title={card.title} key={card.id} />;
});

	return (
		<>
			<Header/> 
			<div className="cards-display">
			{cardsComponet}
			</div>
		</>
	);
};

export default App;
