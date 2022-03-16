import React, {Component} from 'react';
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <NavBar>
                    {/*数据存储在子组件的props中*/}
                    <span>aaaaa</span>
                    <strong>bbbb</strong>
                    <span>cccc</span>
                </NavBar>
                {/**自定义名称*/}
                <NavBar2 leftSlot={<span>aaaa</span>}
                         centerSlot={<span>bbbb</span>}
                         rightSlot={<a href="/#">cccc</a>}/>
            </div>
        )
    }

}
