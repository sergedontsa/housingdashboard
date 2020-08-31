import React, {Component} from 'react';
import './SignAndSigout.style.scss'
import SignInComponent from "../../Component/SignIn/SignIn.component";
import Grid from "@material-ui/core/Grid";

class SignAndSignOutPage extends Component {

    render() {
        return (
            <div className={'root'}>
            <div className={'container'}>
                <Grid container={true} spacing={1}>
                    <Grid className={'left'} item={true} xs={12} sm={6}>

                    </Grid>
                    <Grid item={true} xs={12} sm={6}>
                        <SignInComponent/>
                    </Grid>

                </Grid>


            </div>

            </div>


        );
    }
}

export default SignAndSignOutPage;