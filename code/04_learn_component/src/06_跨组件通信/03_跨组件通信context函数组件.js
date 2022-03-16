import React, {Component} from "react";

//1:创建Context对象
const userContext = React.createContext({
        nickname: '冰冰',
        level: 1
    }
)


function ProfileHeader() {
    return (
        <userContext.Consumer>
            {
                value => {
                    return (
                        <div>
                            <h2>用户昵称:{value.nickname}</h2>
                            <h2>用户等级:{value.level}</h2>
                        </div>
                    )
                }
            }
        </userContext.Consumer>
    )
}


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
                <Profile/>
            </div>
        )
    }
}
