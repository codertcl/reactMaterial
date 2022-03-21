// import React from 'react';
// import { connect } from 'react-redux';
//
// import {
//     decrement,
//     subNumber
// } from "../store/count/actionCreators.js";
//
// function About(props) {
//     return (
//         <div>
//             <hr />
//             <h1>About</h1>
//             <h2>当前计数: {props.count}</h2>
//             <button onClick={e => props.decrement()}>-1</button>
//             <button onClick={e => props.subNumber(5)}>-5</button>
//             <h1>Banner</h1>
//             <ul>
//                 {
//                     props.banner.map((item, index) => {
//                         return <li key={item.acm}>{item.title}</li>
//                     })
//                 }
//             </ul>
//             <h1>Recommend</h1>
//             <ul>
//                 {
//                     props.recommend.map((item, index) => {
//                         return <li key={item.acm}>{item.title}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }
//
// const mapStateToProps = state => {
//     return {
//         count: state.countInfo.count,
//         banner: state.homeInfo.banner,
//         recommend: state.homeInfo.recommend
//     }
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         decrement: function () {
//             //decrement为哈数则需要执行以返回对象
//             dispatch(decrement);
//         },
//         subNumber: function (num) {
//             dispatch(subNumber(num))
//         }
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(About);

import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';

function About() {
    //根据返回的对象进行比较 用===判断两次的返回值是否一致 返回的对象不会相等
    // 如果不添加count和shallowEqual 则每次都会重新渲染
    // useSelector 共享状态,从Redux的store中提取数据（state）
    //使用useSelector尽量添加shallowEqual
    const {banner, recommend, count} = useSelector(state => ({
        banner: state.homeInfo.banner,
        recommend: state.homeInfo.recommend,
        count: state.countInfo.count
    }), shallowEqual)//shallowEqual浅层比较
    return (
        <div>
            <hr/>
            <h2>当前计数: {count}</h2>
            <h1>Banner</h1>
            <ul>
                {
                    banner.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
            <h1>Recommend</h1>
            <ul>
                {
                    recommend.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default About;
