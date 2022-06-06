import "./styles.css";

const Square = ({onClick}) => {

  return (
    <div className="squre">
      <button 
        type="button" 
        className="btn" 
        onClick={onClick}>-
      </button>
      <p className="num">0</p>
      <button 
        type="button" 
        className="btn" 
        onClick={onClick}>+
      </button>
    </div>

  )
  
}

export default Square;