import React, {memo, PureComponent} from "react";


//避免函数组件无意义调用 类似类组件继承PureComponent
const MemoHeader = memo(function Header() {
    console.log('Header的render函数被调用')
    return <h2>header</h2>
})


function Footer() {
    console.log('Footer的render函数被调用')
    return <h2>footer</h2>
}

class Banner extends PureComponent {
    render() {
        console.log('Banner的render函数被调用')
        return (<div>
            <h2>Banner</h2>
        </div>)
    }
}

const MemoProductList=memo(function ProductList() {
    console.log('ProductList的render函数被调用')
    return (
        <ul>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
        </ul>
    )
})

//继承PureComponent后 该组件对应数据未更新时 则不会调用render
class Main extends PureComponent {
    render() {
        console.log('Main的render函数被调用')
        return (<div>
            <Banner/>
            <MemoProductList/>
        </div>)
    }
}


export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        console.log('App的render函数被调用')
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>+1</button>
                <MemoHeader/>
                <Main/>
                <Footer/>
            </div>
        )
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
}
