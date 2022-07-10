import React, {PureComponent} from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        // 引用类型
        this.state = {
            friends: [
                {name: "lilei", age: 20},
                {name: "lily", age: 25},
                {name: "lucy", age: 22}
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>好友列表:</h2>
                <ul>
                    {
                        this.state.friends.map((item, index) => {
                            return (
                                <li key={item.name}>
                                    姓名: {item.name}
                                    年龄: {item.age}
                                    <button onClick={e => this.incrementAge(index)}>age+1</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={e => this.insertData()}>添加数据</button>
            </div>
        )
    }

    shouldPureComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState.friends, this.state.friends)
        if (nextState.friends !== this.state.friends)
            return true
        return false
    }

    incrementAge(index) {
        let newInfo = [...this.state.friends]
        newInfo[index].age++
        this.setState({
            friends: newInfo
        })
    }

    insertData() {
        const newData = {
            name: '冰冰',
            age: 31
        }

        // //1:该方式更新了当前state中的friends数组
        // this.state.friends.push(newData)
        // this.setState({
        //     //未改变friends的引用地址,在shouldPureComponentUpdate函数中
        //     //nextState.friends和this.state.friends指向的内存地址一致,所以就不会重新渲染
        //     friends: this.state.friends
        // })


        //2:推荐做法 更改了friends的引用地址 在shouldPureComponentUpdate
        //判断出和this.state.friends引用地址不同
        let newFriends = [...this.state.friends, newData]
        this.setState({
            friends: newFriends
        })
    }
}
