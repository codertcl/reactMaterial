import React, {Component} from "react";
import PropTypes from 'prop-types'

function ChildCpn(props) {
    const {name, age,names} = props
    return (
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{names}</h2>
            <ul>
                {
                    names.map(item => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    )

}

ChildCpn.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    names: PropTypes.array
}

//设置默认值
ChildCpn.defaultProps = {
    name: '冰冰',
    age: 32,
    names: ['冰冰', '庄晓莹']
}


export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name='sxy' age={22} names={['冰冰', 'sxy']}/>
                <ChildCpn/>
            </div>
        )
    }
}
