import React, {Component} from "react";

//1:创建Context对象
const UserContext = React.createContext({
        nickname: '冰冰',
        level: 1
    }
)

const ThemeContext = React.createContext({
        color: "black"
    }
)

function ProfileHeader() {
    return (
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <ThemeContext.Consumer>
                            {
                                theme => {
                                    return (
                                        <div>
                                            <h2>用户昵称:{value.nickname}</h2>
                                            <h2>用户等级:{value.level}</h2>
                                            <h2>用户颜色:{theme.color}</h2>
                                        </div>
                                    )
                                }
                            }
                        </ThemeContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
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
                <UserContext.Provider value={this.state}>
                    <ThemeContext.Provider value={{ color: "pink" }}>
                        <Profile/>
                    </ThemeContext.Provider>
                </UserContext.Provider>
                <Profile/>
            </div>
        )
    }
}
