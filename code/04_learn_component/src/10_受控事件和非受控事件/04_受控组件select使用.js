import React, {PureComponent} from "react";

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fruit: 'pear'
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => {
                    this.handleSubmit(e)
                }}>
                    <select name="fruits"
                            value={this.state.fruit}
                            onChange={e => this.handleChange(e)}>
                        <option value="apple">苹果</option>
                        <option value="pear">梨子</option>
                        <option value="banana">香蕉</option>
                    </select>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault()//取消默认事件
        //保存数据到state中
        console.log(this.state.fruit)
    }

    //监听input内容改变 则更新fruit ,然后显示到input中 保存数据到state中
    handleChange(e) {
        this.setState({
            fruit: e.target.value
        })
    }
}
