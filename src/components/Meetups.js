import React, { Component } from 'react';

import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component {
    constructor() {
        super();

        this.state = {
            meetups: []
        }
    }

    componentWillMount() {
        this.getMeetups();
    }

    getMeetups() {
        axios.get(`http://localhost:3000/api/meetups?access_token=${global.LoggedUser.token}`)
        .then( response => {
            this.setState({ meetups: response.data }, () => {
                console.log(this.state);
            })
        })
        .catch( err => console.log(err));
    }

    render () {
        const meetupItem = this.state.meetups.map( (meetup, i) => (
            <MeetupItem  item={meetup} key={meetup.id} />
        ))
        return (
            <div>
                <ul className="collection with-header">
                    {meetupItem}
                </ul>
            </div>
        )
    }
}

export default Meetups