import React,{PureComponent} from "react";
import profileStyle from './style.module.css'

export default class Profile extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
            message:'你好'
        }
    }

    render() {
        return (
            <div className="profile">
                <h1 className={profileStyle.title}>Profile</h1>
                <ul className={profileStyle.settings}>
                    <li className={profileStyle.settingItem}>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
