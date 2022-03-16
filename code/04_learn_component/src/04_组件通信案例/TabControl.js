import React, {Component} from "react";
import PropTypes from 'prop-types'

export default class TabControl extends Component {
    static propTypes = {
        titles: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    render() {
        const {titles} = this.props
        const {currentIndex} = this.state
        return (
            <div className='tab-control'>
                {
                    titles.map((item, index) => {
                        return (
                            <div key={item}
                                 onClick={() => this.itemClick(index)}
                                 className={'tab-item ' + (currentIndex === index ? 'active' : '')}>
                                <span>{item}</span>
                            </div>)
                    })
                }
            </div>
        )
    }

    itemClick(index) {
        this.setState({
            currentIndex: index
        })

        const {click} = this.props;
        click(index);//调用click事件 父类内监听到该事件后触发其绑定的事件
    }
}
