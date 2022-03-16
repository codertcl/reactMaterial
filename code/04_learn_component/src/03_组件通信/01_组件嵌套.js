import React, {Component} from "react";

function Header() {
    return <h2>header</h2>
}

function Main() {
    return (<div>
        <Banner/>
        <ProductList/>
    </div>)
}

function Footer() {
    return <h2>footer</h2>
}

function Banner() {
    return <h2>banner</h2>
}

function ProductList() {
    return (
        <ul>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
        </ul>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '你好'
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}
