import { connect } from "react-redux";
import {increment, decrement} from '../../store/counter/actions';
import {selectCounterNumber} from '../../store/counter/selectors';


const Counter = ({countNumber, increment, decrement}) => (
    <div>
        <div>{countNumber}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
)

const mapStateToProps = state => ({
    countNumber: selectCounterNumber(state),
})

const mapDispatchToProps = {
    increment,
    decrement

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);