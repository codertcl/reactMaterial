import React, {Fragment, PureComponent} from "react";


export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            friends: [
                {name: '冰冰', age: "32"},
                {name: 'sxy', age: "22"}
            ]
        }
    }

    render() {
        return (
            // <Fragment>
            //短语法
            <>
                <h2>Fragment</h2>
                <div>
                    {
                        this.state.friends.map(item => {
                            return (
                                // <div> 使用div多余 短语法无法添加key
                                <Fragment key={item.name}>
                                    <>
                                        <div>{item.name}</div>
                                        <p>{item.age}</p>
                                        <hr/>
                                    </>
                                </Fragment>
                                // </div>
                            )
                        })
                    }
                </div>
            </>
            // </Fragment>
        )
    }
}
