import "./styles.css";
import Minus from "./Buttons/Minus"
import Plus from "./Buttons/Plus"
import Number from "../Number";

const SquareComponent = ({num, onPlus, onMinus}) => {
  return (
    <div className="squre">
      <Minus
        onClick={onMinus}/>
      <Number
        num={num}/>
      <Plus
        onClick={onPlus}/>
    </div>
  )
}

export default SquareComponent;