import React, {PureComponent} from "react";
import styled from 'styled-components'

const HYInput = styled.input.attrs({
    //属性被添加到input元素上,并添加到props中
    placeholder: "冰冰",
    bColor: "red"
})`
background-color: #afeaff;
border-color:${props => props.bColor};
color:${props => props.color}
`
export default class Profile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            color: 'yellow'
        }
    }

    render() {
        return (
            <div>
                <hr/>
                <input type="password"/>
                <HYInput type="text" color={this.state.color}/>
                <h1>Profile</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
