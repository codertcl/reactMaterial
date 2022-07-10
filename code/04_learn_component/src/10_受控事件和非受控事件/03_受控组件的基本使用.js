import React, {PureComponent} from "react";

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        //表单数据保存在state中
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => {
                    this.handleSubmit(e)
                }}>
                    <label htmlFor="">
                        用户
                        <input type="text"
                               id="username"
                               onChange={e => this.handleChange(e)}
                               value={this.state.username}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault()//取消表单默认的提交事件
        //保存数据到state中
        console.log(this.state.username)
    }

    //监听input内容改变 则更新username ,然后显示到input中 保存数据到state中
    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }
}
