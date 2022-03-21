import {connect} from "../utils/connect";
import {decrement, subNumber} from "../store/actionCreators";

function about(props) {
    return (
        <div>
            <h1>about</h1>
            <h2>{props.count}</h2>
            <button onClick={e => props.decrement()}>-1</button>
            <button onClick={e => props.subNumber(5)}>-5</button>
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
        decrement: function () {
            dispatch(decrement())
        }, subNumber: function (num) {
            dispatch(subNumber(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(about)
