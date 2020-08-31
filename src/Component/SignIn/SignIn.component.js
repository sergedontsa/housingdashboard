import React, {Component} from 'react';
import './SignIn.style.scss'
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PersonIcon from '@material-ui/icons/Person';
import HttpsIcon from '@material-ui/icons/Https';
import {Link} from "react-router-dom";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

class SignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            usernameError: false,
            passwordError: false,
            errorMessageUsername:'',
            errorMessagePassword:'',
            usernameIconColor:"inherit",
            passwordIconColor:"inherit"
        }
    }

    handleSubmit = event =>{
        event.preventDefault()

        if (!this.state.username){
            this.setState({usernameError: true, errorMessageUsername:'Username is required', usernameIconColor:'secondary'})

            return
        }
        if (!this.state.password){
            this.setState({passwordError: true, errorMessagePassword:'Password is required', passwordIconColor: 'secondary'})
            return
        }

        this.setState({username:'', password:''})
    }

    handleChange = event => {
        event.preventDefault()
        const{value, name} = event.target;
        if (this.state.username){
            this.setState({usernameError: false, errorMessageUsername:'', usernameIconColor:'inherit'})

        }
        if (this.state.password){
            this.setState({passwordError: false, errorMessagePassword:'', passwordIconColor: 'inherit'})

        }
        this.setState({[name]: value})

    }
    render() {
        return (
            <div className={'outer-container'}>
                <Card className={'card-container'} variant={"outlined"}>
                <form onSubmit={this.handleSubmit}>
                    <CardContent>
                        <div className={'field-container'}>
                            <TextField
                                onChange={this.handleChange}
                                name={'username'}
                                value={this.state.username}
                                error={this.state.usernameError}
                                style={{marginTop:10}}
                                label={"Username: "}
                                type={"email"}
                                helperText={this.state.errorMessageUsername}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon color={this.state.usernameIconColor} />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                            <TextField
                                onChange={this.handleChange}
                                name={'password'}
                                value={this.state.password}
                                error={this.state.passwordError}
                                style={{marginTop:10}}
                                label={"Password: "}
                                type={"password"}
                                helperText={this.state.errorMessagePassword}
                                InputProps={{
                                    startAdornment:(
                                        <InputAdornment position={"start"}>
                                            <HttpsIcon color={this.state.passwordIconColor}/>
                                        </InputAdornment>
                                    )

                                }}

                            />
                            <Link className={'forgot-pass'}to={'/reset/password'}>Forgot your password?</Link>
                        </div>
                    </CardContent>
                    <CardActions className={"button-container-1"}>
                        <div className={"button-container"}>
                            <Button endIcon={<ArrowRightAltIcon/>} disableElevation={true} color={'secondary'} type={'submit'} className={'button-s'} fullWidth={true} variant={"contained"}>Continue</Button>
                        </div>
                    </CardActions>
                </form>
                </Card>
            </div>
        );
    }
}

export default SignInComponent;