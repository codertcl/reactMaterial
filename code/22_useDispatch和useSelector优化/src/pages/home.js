import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {addNumber, increment} from '../store/count/actionCreators.js'
import {fetchHomeMultidataAction} from '../store/home/actionCreators.js'

class Home extends PureComponent {
    componentDidMount() {
        this.props.getHomeMultidata()
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>当前计数: {this.props.count}</h2>
                <button onClick={e => this.props.increment()}>+1</button>
                <button onClick={e => this.props.addNumber(5)}>+5</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.countInfo.count
})

//dispatch参数必须是对象
const mapDispatchToProps = dispatch => ({
    increment() {
        dispatch(increment);
    },
    addNumber(num) {
        dispatch(addNumber(num));
    },
    getHomeMultidata() {
        dispatch(fetchHomeMultidataAction);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
