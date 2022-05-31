import "../styles.css";

const Plus = ({onClick}) => {
  return (
    <button 
      type="button" 
      className="btn" 
      onClick={onClick}>
      +
    </button>
  )
}

export default Plus;