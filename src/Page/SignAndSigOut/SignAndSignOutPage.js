import React, {Component} from 'react';
import './SignAndSigout.style.scss'
import Grid from "@material-ui/core/Grid";
import SignInComponent from "../../Component/SignIn/SignIn.component";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Divider} from "@material-ui/core";





class SignAndSignOutPage extends Component {

    render() {
        return (
            <Grid className={'root'} alignItems={"stretch"} justify={"center"} direction={"row"} container={true}>
                <Grid className={'left'} item={true} xs={12} sm={7}>
                    <div className={'inner-left'}>

                    </div>
                </Grid>
                <Grid className={'right'} item={true} xs={12} sm={5}>
                    <Divider/>
                    <AppBar position={"static"} color={'transparent'} elevation={0}>
                        <Toolbar color={'red'} variant={"dense"}>
                            <h3 style={{marginRight:30}}>Login</h3>
                            <Divider orientation={'vertical'}/>

                        </Toolbar>
                    </AppBar>
                    <SignInComponent/>
                </Grid>
            </Grid>

        );
    }
}

export default SignAndSignOutPage;