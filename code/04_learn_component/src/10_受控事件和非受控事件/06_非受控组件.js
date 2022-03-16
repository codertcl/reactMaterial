import React, { PureComponent,createRef } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.usernameRef=createRef()
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户:
                        <input type="text"
                               id="username"
                               name="username"
                               ref={this.usernameRef}/>
                    </label>
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

    //通过ref来获取输入框内数据
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.usernameRef.current.value);
    }
}
