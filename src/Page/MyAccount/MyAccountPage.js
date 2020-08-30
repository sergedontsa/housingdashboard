import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {Button, Divider} from "@material-ui/core";
import ProfilePicture from "../../Component/ProfilePicture/ProfilePicture";
import './MyAccountPage.js.style.scss'
import TextInputField from "../../Component/TextInput/TextInputField";

class  MyAccountPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFieldDisable: true
        }
    }
     handleEditClick = (event) => {
        event.preventDefault()
        console.log('Edit button click')
         this.setState({ isFieldDisable: false})
    }

    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                            <div className={'my-account-title'}>
                                <p className={'title'}>My Account</p>
                            </div>

                        <ProfilePicture/>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={'fieldRoot'}>
                            <TextInputField label={'Username: '} type={'text'} value={'username@gmail.com'} disable={this.state.isFieldDisable}/>
                            <TextInputField label={'Password: '} type={'password'} value={'password'} disable={this.state.isFieldDisable}/>
                            <TextInputField label={'Role: '} type={'text'} value={'Role'} disable={true}/>
                        </div>
                        <div className={'buttonContainer'}>
                            <div className={'button-1'}>
                                <Button onClick={this.handleEditClick} variant={'outlined'} color={'primary'}>Edit Credential</Button>
                            </div>
                            <div className={'button-2'}>
                                {
                                    !this.state.isFieldDisable ? <Button  variant={'outlined'} color={'primary'}>Save Change</Button>: null
                                }
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Divider/>
            </div>
        )
    }
}
export default MyAccountPage;

