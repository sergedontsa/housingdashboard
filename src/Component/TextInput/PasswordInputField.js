import React, {Component} from "react";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


class PasswordInputField extends Component{
    constructor(props) {
        super(props);
        this.state ={
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
        }
    }
    handleChange = (event) => {
        const{value, name} = event.target;
        this.setState({[name]: value})
    }
    handleClickShowPassword = () =>{
        this.setState({showPassword: !this.showPassword})
    }
    handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        name={'password'}
                        id="standard-adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    onMouseDown={this.handleMouseDownPassword}
                                >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
        );
    }

}

export default PasswordInputField;