import "./Style.css";

const Card = ({title}) => {
	return (
		<div className="card" >
			<div className="card-image">
				<img  alt="Card Image" />
			</div>
			<h2>{title}</h2>
		</div>
	);
};

export default Card;
