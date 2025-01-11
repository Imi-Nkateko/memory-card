import "./Style.css"

const Header = ({score}) => {
  return (
    
    <header>
        <div className="logo">
            Logo
        </div>
        <div className="score-board">
            <h1>Score: {score}</h1>
            <h3>High Score: 11</h3>
        </div>
    </header>
  )
}

export default Header
