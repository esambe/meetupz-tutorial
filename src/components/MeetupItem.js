import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class MeetupItem extends Component {
    constructor(props) {
        super(props);

        this.state ={

        }
    }
    render () {
        return (
            <li className="collection-item" key={this.props.key}>
                <div>{this.props.item.name}<Link to={`/meetups/${this.props.item.id}`} className="secondary-content"><i className="fa fa-eye"></i></Link></div>
            </li>
        )
    }
}

export default MeetupItem