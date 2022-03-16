import React from 'react';
import { connect } from 'react-redux';

import {
    decrement,
    subNumber
} from "../store/count/actionCreators.js";

function About(props) {
    return (
        <div>
            <hr />
            <h1>About</h1>
             <h2>当前计数: {props.count}</h2>
            <button onClick={e => props.decrement()}>-1</button>
            <button onClick={e => props.subNumber(5)}>-5</button>
            <h1>Banner</h1>
            <ul>
                {
                    props.banner.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
            <h1>Recommend</h1>
            <ul>
                {
                    props.recommend.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.countInfo.count,
        banner: state.homeInfo.banner,
        recommend: state.homeInfo.recommend
    }
};

const mapDispatchToProps = dispatch => {
    return {
        decrement: function () {
            //decrement为哈数则需要执行以返回对象
            dispatch(decrement);
        },
        subNumber: function (num) {
            dispatch(subNumber(num))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
