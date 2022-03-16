import React, {Component} from "react";
import PropTypes from "prop-types";

// import PropTypes from 'prop-types'

class ChildCpn extends Component {
    //类属性
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        names: PropTypes.array
    }


    //设置默认值
    static defaultProps = {
        name: '冰冰',
        age: 32,
        names: ['冰冰', '庄晓莹']
    }

    render() {
        const {name, age} = this.props
        const {names} = this.props
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
