import {connect} from "../utils/connect";
import {addNumber, increment} from "../store/actionCreators";

function home(props) {
    return (
        <div>
            <h1>home</h1>
            <h2>{props.count}</h2>
            <button onClick={e => props.increment()}>+1</button>
            <button onClick={e => props.addNumber(5)}>+5</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = dispatch => {
    return {
        increment: function () {
            dispatch(increment())
        }, addNumber: function (num) {
            dispatch(addNumber(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
