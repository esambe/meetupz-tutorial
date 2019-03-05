import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            userToken: ''
        }
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    

    onSubmit(e) {
        e.preventDefault();

        const credentials = {
            email: this.state.email,
            password: this.state.password 
        }

        axios.post('http://localhost:3000/api/Users/login', credentials)
        .then( response => {
            console.log(response);

            this.setState({
                userToken: response.data.id
            })

            if ( response.status == 200) {

                global.LoggedUser.token = response.data.id;
                this.props.history.push('/meetups');

            }
        })
        .catch( err => console.log(err) );

    }

    render () {
        return (
            <div>
                <div className="container">
                  <form onSubmit={ this.onSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="email" ref="email" type="email" className="validate" onChange={this.handleInputChange.bind(this)} />
                        <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="password" name="password" ref="password" className="validate" onChange={this.handleInputChange.bind(this)} />
                        <label for="password">Password</label>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn">Login</button>
                    <Link className="btn red right" to="/register">Register</Link>
                  </form>
                </div>
            </div>
        )
    }
}

export default Login