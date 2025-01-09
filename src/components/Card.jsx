import "./Style.css";

const Card = ({ cardData }) => {
	function handleClick() {
		alert("score + 1");
	}

	return (
		<div className="card" onClick={handleClick}>
			<div className="card-image">
				<img src={cardData.url} alt="Card Image" />
			</div>
			<h2>{cardData.title}</h2>
		</div>
	);
};

export default Card;
