import React, { Component } from 'react';
// import '../../rest-toDelete/Shiekhaljabal/node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import './signUp.css';
import Header from '../../SharedComponents/Header/header.js'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            Password: '',
            Email: ''
        }
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeUserName(e) {
        this.setState({ UserName: e.target.value })
    }

    changePassword(e) {
        this.setState({ Password: e.target.value })
    }

    changeEmail(e) {
        this.setState({ Email: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const registered = {
            UserName: this.state.UserName,
            Password: this.state.Password,
            Email: this.state.Email
        }
        fetch('http://localhost:5000/fooddose/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("jwt-auth", data.token)
                alert("you registered sucssesfully");
                window.location.href = '/login'            // to go from signup to signin
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        this.setState({
            UserName: '',
            Password: '',
            Email: ''
        })
    }
    render() {
        return (
            <div >
                <Header />
                <Typography component="h1" variant="h3" align="center" id="title"> Signup</Typography><br />
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">

                    <form onSubmit={this.onSubmit} >
                        <FormControl margin="normal" id="input" >
                            <TextField
                                required
                                id="username"
                                name="username"
                                value={this.state.UserName}
                                onChange={this.changeUserName}
                                label="UserName" variant="outlined"

                            />
                        </FormControl><br />
                        <FormControl margin="normal" >
                            <TextField
                                required
                                id="password"
                                name="password"
                                type="Password"
                                value={this.state.Password}
                                onChange={this.changePassword}
                                label="Password" variant="outlined"
                            />
                        </FormControl><br />
                        <FormControl margin="normal" >
                            <TextField
                                required
                                id="email"
                                name="email"
                                type="email"
                                value={this.state.Email}
                                onChange={this.changeEmail}
                                label="Email" variant="outlined"
                            />
                        </FormControl><br /><br />
                        <Button id="btn"
                            onClick={this.handleSubmit}
                            type="submit"
                            size="large"
                            variant="contained"
                            justifyContent="center"


                        >
                            Signup
              </Button>
                    </form>

                </Box>

            </div >
        );
    }
}

export default SignUp;


