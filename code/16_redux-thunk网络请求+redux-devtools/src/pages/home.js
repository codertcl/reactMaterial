import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {addNumber, getHomeMultidataAction, increment,} from '../store/actionCreators'

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
    count: state.count
})

const mapDispatchToProps = dispatch => ({
    increment() {
        dispatch(increment());
    },
    addNumber(num) {
        dispatch(addNumber(num));
    },
    getHomeMultidata() {
        dispatch(getHomeMultidataAction);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
