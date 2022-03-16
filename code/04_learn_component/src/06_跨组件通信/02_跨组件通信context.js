import React, {Component} from "react";

//1:创建Context对象
const userContext = React.createContext({
        nickname: '冰冰',
        level: 1
    }
)

class ProfileHeader extends Component {
    render() {
        console.log(this.context)
        return (
            <div>
                <h2>用户昵称:{this.context.nickname}</h2>
                <h2>用户等级:{this.context.level}</h2>
            </div>
        )
    }
}

ProfileHeader.contextType = userContext

function Profile() {
    return (
        <div>
            <ProfileHeader/>
            <ul>
                <li>设置1</li>
                <li>设置2</li>
            </ul>
        </div>
    )

}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '冰冰',
            level: '99'
        }
    }

    render() {
        return (
            <div>
                <userContext.Provider value={this.state}>
                    <Profile/>
                </userContext.Provider>
                {/*使用默认值*/}
                <Profile/>
            </div>
        )
    }
}
