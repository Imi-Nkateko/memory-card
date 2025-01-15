import { useState, useEffect } from "react";
import "./Style.css";
import Card from "./Card";
import axios from "axios";

const Cards = ({ points, setPoints }) => {

	const [selectedCharacters, setSelectedCharacters] = useState([]);
	
	const [gifs, setGifs] = useState([]);
	const API_KEY = "MHJ7gblggxHpMhAJJVbb4kvQNWmjF44t"; 
	const searchTerm = "Courage the Cowardly Dog";

	useEffect(() => {
	
		const fetchGifs = async () => {
			try {
				const response = await axios.get(
					`https://api.giphy.com/v1/gifs/search`,
					{
						params: {
							api_key: API_KEY,
							q: searchTerm,
							limit: 12, // Number of GIFs to fetch
						},
					}
				);
				
				setGifs(response.data.data);
			} catch (error) {
				console.error("Error fetching GIFs:", error);
			}
		};

		fetchGifs();
	}, []);
	console.log(gifs)

	return (
		<div className="cards-display">
			{gifs.map((gif, index) => (
				<Card
					setCharacters={setGifs}
					key={gif.id || index}
				
					link={gif.images.fixed_height.url || "default-image-url.jpg"}
					name={gif.id}
					points={points}
					setGifs={setGifs}
					setPoints={setPoints}
					selectedCharacters={selectedCharacters}
					setSelectedCharacters={setSelectedCharacters}
				/>
			))}
		</div>
	);
};

export default Cards;
