import "./Style.css";

const Card = ({
	setGifs,
	link,
	name,
	setPoints,
	selectedCharacters,
	setSelectedCharacters,
}) => {
	const shuffleCards = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	};

	const handleClick = () => {
		if (selectedCharacters.filter((gif) => gif === name).length > 0) {
			setPoints(0);
			setSelectedCharacters([]);
		} else {
			setPoints((currentPoints) => (currentPoints += 1));
			setSelectedCharacters((prevInfo) => {
				return [...prevInfo, name];
			});
		}
		setGifs((currentArr) => {
			console.log("Before shuffle:", currentArr);
			const shuffled = shuffleCards([...currentArr]);
			console.log("After shuffle:", shuffled);
			return shuffled;
		});
	};
	return (
		<div
			className="card"
			onClick={() => handleClick(name)}
			style={{ border: "1px solid black", padding: "10px" }}
		>
			<div className="card-image">
				<img src={link} />
			</div>
		</div>
	);
};

export default Card;
