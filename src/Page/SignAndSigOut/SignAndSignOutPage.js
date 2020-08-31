import React, {Component} from 'react';
import './SignAndSigout.style.scss'
import Grid from "@material-ui/core/Grid";
import SignInComponent from "../../Component/SignIn/SignIn.component";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Divider} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";





class SignAndSignOutPage extends Component {

    render() {
        return (
            <div>
            <div className={'container'}>
                <div className={'form-container'}>
                    <SignInComponent/>
                </div>

            </div>
                <Divider/>
            </div>


        );
    }
}

export default SignAndSignOutPage;