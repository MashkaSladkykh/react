import "../styles.css";

const Plus = ({onPlus}) => {
  return (
    <button 
      type="button" 
      className="btn" 
      onClick={onPlus}>
      +
    </button>
  )
}

export default Plus;