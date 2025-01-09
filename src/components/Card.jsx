const Card = ({ cardData }) => {
	return (
		<div className="card-container">
			<div className="card-image">
				<img src={cardData.url} alt="" />
			</div>
			<h2>{cardData.title}</h2>
		</div>
	);
};

export default Card;
