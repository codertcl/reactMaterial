import React, {Component} from 'react';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const {centerSlot, rightSlot, leftSlot} = this.props
        return (
            <div className='nav-item nav-bar'>
                <div className='nav-left'>{leftSlot}</div>
                <div className='nav-center'>{centerSlot}</div>
                <div className='nav-right'>{rightSlot}</div>
            </div>
        )
    }
}
